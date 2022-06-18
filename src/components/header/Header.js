import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Container, Background, Link, Logo } from './styles/Header';
import { Container, Group, Background, Link, ButtonLink, Logo } from './styles/Header';

export const LinkContext = createContext();

export function Header({ bg = true, to, children, ...restProps }) {
    return (
        <LinkContext.Provider value={{ to }}>
            {bg ? <Background {...restProps}>{children}</Background> : children}
        </LinkContext.Provider>
    );
    export function Header({ bg = true, children, ...restProps }) {
        return bg ? <Background {...restProps}>{children}</Background> : children;
    }

    Header.Frame = function HeaderFrame({ children, ...restProps }) {
        return <Container {...restProps}>{children}</Container>;
    };

    Header.Group = function HeaderGroup({ children, ...restProps }) {
        return <Group {...restProps}>{children}</Group>;
    };

    Header.Logo = function HeaderLogo({ to, ...restProps }) {
        return (
            <ReachRouterLink to={to}>
                <Logo {...restProps} />
            </ReachRouterLink>
        );
    };


    Header.Text = function HeaderText({ children, ...restProps }) {
            return <Link {...restProps}>{children}</Link>;
    };

  
    Header.Link = function HeaderLink({ children, ...restProps }) {
            return <Link {...restProps}>{children}</Link>;
    };

    Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
            return <ButtonLink {...restProps}>{children}</ButtonLink>;
    };