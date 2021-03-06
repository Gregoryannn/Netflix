import React from 'react';
import { Container, Group, Title, SubTitle, Text, Meta, Entities, Item, Image } from './styles/Card';

export function Card({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};

Card.Cta = function CardCta({ backgroundSrc, children, ...restProps }) {
    return (
        <Cta backgroundSrc={backgroundSrc} {...restProps}>
            {children}
        </Cta>
    );
    Card.Image = function CardImage({ src, ...restProps }) {
        return <Image src={src} {...restProps} />;
    };

// loading state on cards (placeholder)
// trigger dropdown panel