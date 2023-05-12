import { Property, View } from '@nativescript/core';

export class CustomButtonCommon extends View {
  name: string;
}

export const nameProperty = new Property<CustomButtonCommon, string>({
  name: 'text',
  defaultValue: '',
});

nameProperty.register(CustomButtonCommon);
