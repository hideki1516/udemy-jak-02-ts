import { VFC } from 'react';
import styled from "styled-components";
import { Product } from './types/product'

type Props = {
  product: Product;
}

export const ProductDetail: VFC<Props> = (props) => {
  const { product } = props;

  return (
    <dl>
      <SDiv>        
        <dt>商品名：</dt>
        <dd>{product.name}</dd>
      </SDiv>
      <SDiv>
        <dt>作家名：</dt>
        <dd>{product.creator}</dd>
      </SDiv>
      <SDiv>
        <dt>こだわりポイント：</dt>
        <dd>{product.commitment?.join(' / ')}</dd>
      </SDiv>
      <SDiv>
        <dt>コメント：</dt>
        <dd>{product.comments}</dd>
      </SDiv>
      <SDiv>
        <dt>価格：</dt>
        <dd>{product.price}</dd>
      </SDiv>
    </dl>
  );
};

const SDiv = styled.div`
  display: flex;
  dt {
    width: 150px;
  }
`;