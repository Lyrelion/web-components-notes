/*
 * @Description: 测试在 stencil 中使用 ionic（https://ionicframework.com/docs/api/alert /////////////// http://johnborg.es/2020/04/ionic-overlays-stencil.html）
 * @Author: Lyrelion
 * @Date: 2023-03-11 17:01:42
 * @LastEditTime: 2023-03-11 17:38:50
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
        {/* 指定 exportparts，这样用户就能修改 子组件 的 shadowDOM 样式了 */}
        <ion-button exportparts="native" onClick={(e: UIEvent) => this.openAlert(e)}>
          <ion-icon slot="start" name="star"></ion-icon>
          {/* 指定 part，这样用户就可以通过 ::part 修改 shadowDOM 样式了 */}
          <span part="title" >测试使用 ion-button</span>
        </ion-button>
      </Host>
    );
  }
}
