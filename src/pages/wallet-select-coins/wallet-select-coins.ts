import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'
import { SecretsProvider } from '../../providers/secrets/secrets.provider'
import { Storage } from '@ionic/storage'
import { LocalAuthenticationOnboardingPage } from '../local-authentication-onboarding/local-authentication-onboarding'
import { AirGapWallet, ICoinProtocol, supportedProtocols } from 'airgap-coin-lib'
import { TranslateService } from '@ngx-translate/core'
import bip39 from 'bip39'

@IonicPage()
@Component({
  selector: 'page-wallet-select-coins',
  templateUrl: 'wallet-select-coins.html'
})
export class WalletSelectCoinsPage {
  selectedProtocol: ICoinProtocol
  customDerivationPath: string
  coinProtocols: ICoinProtocol[]
  isHDWallet: boolean = false
  isAdvancedMode: boolean = false

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private secretsProvider: SecretsProvider,
    private storage: Storage,
    private translateService: TranslateService
  ) {
    this.coinProtocols = supportedProtocols()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletSelectCoinsPage')
  }

  onSelectedProtocolChange(selectedProtocol) {
    this.selectedProtocol = selectedProtocol
    this.isHDWallet = this.selectedProtocol.supportsHD
    this.customDerivationPath = this.selectedProtocol.standardDerivationPath
  }

  onIsHDWalletChange(isHDWallet) {
    this.isHDWallet = isHDWallet
    if (isHDWallet) {
      this.customDerivationPath = this.selectedProtocol.standardDerivationPath
    } else {
      this.customDerivationPath = this.selectedProtocol.standardDerivationPath + '/0/1'
    }
  }

  async addWallet() {
    const value = await this.storage.get('DISCLAIMER_HIDE_LOCAL_AUTH_ONBOARDING')
    if (!value) {
      this.navCtrl.push(LocalAuthenticationOnboardingPage, {
        protocolIdentifier: this.selectedProtocol.identifier,
        isHDWallet: this.isHDWallet,
        customDerivationPath: this.customDerivationPath
      })
      return
    }
    await this.secretsProvider.addWallet(this.selectedProtocol.identifier, this.isHDWallet, this.customDerivationPath)
    await this.navCtrl.popToRoot()
  }
}
