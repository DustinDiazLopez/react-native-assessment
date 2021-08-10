/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleProp, ViewStyle, Linking, Pressable, Text,
} from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export type LinkProps = {
  link: string,
  text: string,
  label: string,
  prefix?: string,
  suffix?: string,
};

const ArticleLink: React.FC<LinkProps> = ({
  link, text, label, prefix, suffix,
}): JSX.Element => {
  const colorScheme = useColorScheme();
  return (
    <Pressable
      onPress={(): Promise<unknown> => Linking.openURL(link)}
      style={({ pressed }): StyleProp<ViewStyle> => [
        { opacity: pressed ? 0.5 : 1 },
      ]}
      accessibilityLabel={label}
    >
      <Text>
        {prefix && `${prefix} `}
        <Text style={{
          color: Colors[colorScheme].tint || 'blue',
          textDecorationLine: 'underline',
        }}
        >
          {text || link}
        </Text>
        {suffix && `${suffix} `}
      </Text>
    </Pressable>
  );
};

export default ArticleLink;
