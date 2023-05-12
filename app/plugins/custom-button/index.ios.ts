import { Color } from '@nativescript/core';
import { CustomButtonCommon, nameProperty } from './index.common';

export class CustomButton extends CustomButtonCommon {
  [nameProperty.setNative](value: string) {
    this.nativeView.setTitleForState(value, UIControlState.Normal);
  }

  private _ios: UIButton;
  private _activityIndicator: UIActivityIndicatorView;

  constructor() {
    super();

    this._ios = UIButton.buttonWithType(UIButtonType.System);
    this._ios.frame = CGRectMake(0, 0, 200, 36);

    this._activityIndicator = UIActivityIndicatorView.alloc().initWithFrame(
      CGRectMake(CGRectGetWidth(this._ios.frame) * 0.5 - 14, CGRectGetHeight(this._ios.frame) * 0.5 - 14, 28, 28),
    );

    this._activityIndicator.activityIndicatorViewStyle = UIActivityIndicatorViewStyle.White;
    this._activityIndicator.startAnimating();

    this._ios.addSubview(this._activityIndicator);
    this._ios.bringSubviewToFront(this._activityIndicator);
    this._ios.backgroundColor = new Color('black').ios;
    this._ios.layer.cornerRadius = 6;
  }

  createNativeView() {
    return this._ios;
  }
}
