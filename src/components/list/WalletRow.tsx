import React, {memo, ReactElement} from 'react';
import {
  Column,
  CurrencyImageContainer,
  CurrencyColumn,
  Row,
} from '../styled/Containers';
import {Badge, H5, SubText} from '../styled/Text';
import {RowContainer} from '../styled/Containers';
import styled from 'styled-components/native';
import NestedArrow from '../../../assets/img/nested-arrow.svg';
import {CurrencyImage} from '../currency-image/CurrencyImage';

const BadgeContainer = styled.View`
  margin-left: 5px;
`;

const BalanceColumn = styled(Column)`
  align-items: flex-end;
`;

const NestedArrowContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export interface WalletRowProps {
  id: string;
  img: string | ((props: any) => ReactElement);
  currencyName: string;
  currencyAbbreviation: string;
  walletName?: string;
  cryptoBalance: number;
  fiatBalance: string;
  isToken?: boolean;
  network: string;
}

interface Props {
  id: string;
  wallet: WalletRowProps;
  onPress: () => void;
}

const buildTestBadge = (
  network: string,
  currencyName: string,
  isToken: boolean | undefined,
): ReactElement | undefined => {
  if (isToken || ['livenet', 'mainnet'].includes(network)) {
    return;
  }
  // logic for mapping test networks to chain
  const badgeLabel = currencyName === 'Ethereum' ? 'Kovan' : 'Testnet';

  return (
    <BadgeContainer>
      <Badge>{badgeLabel}</Badge>
    </BadgeContainer>
  );
};

const WalletRow = ({wallet, onPress}: Props) => {
  const {
    currencyName,
    currencyAbbreviation,
    walletName,
    img,
    cryptoBalance,
    fiatBalance,
    isToken,
    network,
  } = wallet;
  return (
    <RowContainer activeOpacity={0.75} onPress={onPress}>
      {isToken && (
        <NestedArrowContainer>
          <NestedArrow />
        </NestedArrowContainer>
      )}
      <CurrencyImageContainer>
        <CurrencyImage img={img} size={45} />
      </CurrencyImageContainer>
      <CurrencyColumn>
        <Row>
          <H5 ellipsizeMode="tail" numberOfLines={1}>
            {walletName || currencyName}
          </H5>
          {buildTestBadge(network, currencyName, isToken)}
        </Row>
        <SubText>{currencyAbbreviation.toUpperCase()}</SubText>
      </CurrencyColumn>
      <BalanceColumn>
        <H5>{cryptoBalance}</H5>
        <SubText>
          {network === 'testnet' ? 'Test - No Value' : fiatBalance}
        </SubText>
      </BalanceColumn>
    </RowContainer>
  );
};

export default memo(WalletRow);