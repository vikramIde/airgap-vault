import { Injectable } from '@angular/core'
import { Platform } from '@ionic/angular'

declare var SecurityUtils: any

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private readonly platform: Platform) {}

  public checkForRoot(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        SecurityUtils.DeviceIntegrity.assess(result => {
          resolve(!result)
        })
      } else {
        console.warn('root detection skipped - no supported platform')
        resolve(false)
      }
    })
  }

  public onScreenCaptureStateChanged(callback: (captured: boolean) => void): void {
    if (this.platform.is('ios') && this.platform.is('cordova')) {
      SecurityUtils.SecureScreen.onScreenCaptureStateChanged((captured: boolean) => {
        callback(captured)
      })
    }
  }

  public setSecureWindow(): void {
    if (this.platform.is('android') && this.platform.is('cordova')) {
      SecurityUtils.SecureScreen.setWindowSecureFlag()
    }
  }

  public clearSecureWindow(): void {
    if (this.platform.is('android') && this.platform.is('cordova')) {
      SecurityUtils.SecureScreen.clearWindowSecureFlag()
    }
  }

  public removeScreenCaptureObservers(): void {
    if (this.platform.is('ios') && this.platform.is('cordova')) {
      SecurityUtils.SecureScreen.removeScreenCaptureObservers()
    }
  }

  public onScreenshotTaken(callback: () => void): void {
    if (this.platform.is('ios') && this.platform.is('cordova')) {
      SecurityUtils.SecureScreen.onScreenshotTaken(() => {
        callback()
      })
    }
  }

  public removeScreenshotObservers(): void {
    if (this.platform.is('ios') && this.platform.is('cordova')) {
      SecurityUtils.SecureScreen.removeScreenshotObservers()
    }
  }

  public async checkForElectron(): Promise<boolean> {
    return typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0
  }
}
