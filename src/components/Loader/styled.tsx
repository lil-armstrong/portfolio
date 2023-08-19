import styled from 'styled-components'
import { StyledProp, TypeMeta } from './IProps'

const RippleLoader = ({ w = 80, h = 80 }: StyledProp) => `
display: inline-block;
position: relative;
width: ${w}px;
height: ${h}px;
div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: ${w-8}px;
    height: ${h-8}px;
    opacity: 0;
  }
}`

export const RollerLoader = ({ w = 80, h = 80 }: StyledProp) => `
display: inline-block;
position: relative;
width: ${w};
height: ${h};

div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: ${w * 0.5}px ${h * 0.5}px;
}
div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
div:nth-child(1) {
  animation-delay: -0.036s;
}
div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
div:nth-child(2) {
  animation-delay: -0.072s;
}
div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
div:nth-child(3) {
  animation-delay: -0.108s;
}
div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
div:nth-child(4) {
  animation-delay: -0.144s;
}
div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
div:nth-child(5) {
  animation-delay: -0.18s;
}
div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
div:nth-child(6) {
  animation-delay: -0.216s;
}
div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
div:nth-child(7) {
  animation-delay: -0.252s;
}
div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
div:nth-child(8) {
  animation-delay: -0.288s;
}
div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

export const LoaderStyled = styled.div<{ type?: TypeMeta } & StyledProp>(
  ({ type = 'ripple', w = 80, h=80 }) => {
    switch (type) {
      case 'ripple': {
        return RippleLoader({ w, h })
      }
      case 'roller': {
        return RollerLoader({ w, h })
      }
      default:
        return ``
    }
  }
)
