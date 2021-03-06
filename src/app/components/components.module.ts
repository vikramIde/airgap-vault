import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { TranslateModule } from '@ngx-translate/core'
import { QRCodeModule } from 'angularx-qrcode'

import { PipesModule } from '../pipes/pipes.module'

import { AccountItemComponent } from './account-item/account-item.component'
import { AddressRowComponent } from './address-row/address-row.component'
import { CurrencySymbolComponent } from './currency-symbol/currency-symbol.component'
import { CurrentSecretComponent } from './current-secret/current-secret.component'
import { EntropyProgressComponent } from './entropy-progress/entropy-progress.component'
import { FromToComponent } from './from-to/from-to.component'
import { IdenticonComponent } from './identicon/identicon.component'
import { ProgressFooterComponent } from './progress-footer/progress-footer.component'
import { QrClipboardComponent } from './qr-clipboard/qr-clipboard.component'
import { SecretItemComponent } from './secret-item/secret-item.component'
import { SignedTransactionComponent } from './signed-transaction/signed-transaction.component'
import { TouchEntropyComponent } from './touch-entropy/touch-entropy.component'
import { TraceInputDirective } from './trace-input/trace-input.directive'
import { VerifyKeyComponent } from './verify-key/verify-key.component'

@NgModule({
  declarations: [
    AddressRowComponent,
    CurrencySymbolComponent,
    CurrentSecretComponent,
    EntropyProgressComponent,
    FromToComponent,
    IdenticonComponent,
    ProgressFooterComponent,
    QrClipboardComponent,
    SecretItemComponent,
    SignedTransactionComponent,
    TouchEntropyComponent,
    TraceInputDirective,
    VerifyKeyComponent,
    AccountItemComponent
  ],
  imports: [IonicModule, PipesModule, CommonModule, FormsModule, TranslateModule, QRCodeModule],
  exports: [
    AddressRowComponent,
    CurrencySymbolComponent,
    CurrentSecretComponent,
    EntropyProgressComponent,
    FromToComponent,
    IdenticonComponent,
    ProgressFooterComponent,
    QrClipboardComponent,
    SecretItemComponent,
    SignedTransactionComponent,
    TouchEntropyComponent,
    TraceInputDirective,
    VerifyKeyComponent,
    AccountItemComponent
  ],
  entryComponents: []
})
export class ComponentsModule {}
