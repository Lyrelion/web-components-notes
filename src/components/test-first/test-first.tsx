/*
 * @Description: 测试使用 yarn generate 生成组件
 * @Author: Lyrelion
 * @Date: 2023-03-10 08:57:08
 * @LastEditTime: 2023-03-11 17:16:30
 * @FilePath: \stencil-first\src\components\test-first\test-first.tsx
 */
import { Component, h, State, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'test-first',
  styleUrl: 'test-first.css',
  shadow: true,
})
export class TestFirst {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() num: number = 0;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div><button onClick={() => this.num += 1}>add</button>Hello, World! I'm {this.getText()}, number is {this.num}</div>;
  }

}
