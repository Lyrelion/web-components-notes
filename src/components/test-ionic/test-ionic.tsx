/*
 * @Description: 测试在 stencil 中使用 ionic（http://johnborg.es/2020/04/ionic-overlays-stencil.html）
 * @Author: Lyrelion
 * @Date: 2023-03-11 17:01:42
 * @LastEditTime: 2023-03-11 17:12:53
 * @FilePath: \stencil-first\src\components\test-ionic\test-ionic.tsx
 */
import { Component, ComponentInterface, Host, h } from '@stencil/core';
import { alertController } from '@ionic/core';

@Component({
  tag: 'test-ionic',
  styleUrl: 'test-ionic.css',
  shadow: true,
})
export class TestIonic implements ComponentInterface {
  /**
   * 打开弹框
   * @param e
   */
  async openAlert(e: UIEvent) {
    const alert: HTMLIonAlertElement = await alertController.create({
      header: `测试使用 alertController`,
      message: `${JSON.stringify(e)}`,
      buttons: [
        {
          text: 'Ok',
          role: 'select',
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }

  render() {
    return (
      <Host>
        <ion-button onClick={(e: UIEvent) => this.openAlert(e)}>
          <ion-icon slot="start" name="star"></ion-icon>
          测试使用 ion-button
        </ion-button>
      </Host>
    );
  }
}
