import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    // Name that color: https://chir.ag/projects/name-that-color
    mirage: '#1A202C',
    pastelGreen: '#5FDD9D',
    fruitSalad: '#499167',
    white: '#FFF',
    pickledBluewood: '#273248',
    secondary: {
      100: '#499167'
    }
  },
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'sans-serif'
      },
      variants: {
        title: {
          fontSize: '25px',
          fontWeight: 'bold'
        }
      }
    },
    Button: {
      variants: {
        primary: {
          color: 'mirage',
          bg: 'pastelGreen',
          _focus: {
            boxShadow: 'unset',
            border: 'unset'
          },
          _hover: {
            bg: 'fruitSalad',
            borderColor: 'fruitSalad'
          },
          _loading: {
            _hover: {
              bg: 'fruitSalad'
            }
          }
        }
      }
    },
    Input: {
      baseStyle: {
        field: {
          color: 'white'
        }
      }
    }
  }
});
