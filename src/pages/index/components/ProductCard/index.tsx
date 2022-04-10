import React from 'react'
import './style.scss'

interface IProps {}
interface IStates {}

class ProductCard extends React.Component<IProps, IStates> {
  state = {}
  render(): React.ReactNode {
    return <div>这是ProductCard组件</div>
  }
}

export default ProductCard
