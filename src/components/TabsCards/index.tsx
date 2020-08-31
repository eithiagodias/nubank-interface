/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

import {
    Container,
    TabsContainer,
    ContentContainer,
    Content,
    ScrollIndicators,
    Indicator,
    styles,
} from './styles';

import Menu from './Menu';
import CreditCard from './Cards/CreditCard';
import BankAccount from './Cards/BankAccount';
import Rewards from './Cards/Rewards';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Footer from '../Footer';

interface Indicator {
    active: boolean
}


const TabsCards: React.FC = () => {

    let yOffset = 0;

    const MAX_TRANSLATE_Y = 480;
    const translateY = new Animated.Value(0);

    const [indicatorIndex, setIindicatorIndex] = useState(0);
    const [xOffset, setXOffset] = useState(0);
    const [indicators, setIndicators] = useState([
        { active: true },
        { active: false },
        { active: false },
    ] as Indicator[]);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true }
    );


    function onHandlerStateChanged(event) {

        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;

            const { translationY } = event.nativeEvent;
            yOffset += translationY;


            if (translationY > 100) {
                opened = true;
            } else {
                translateY.setValue(yOffset);
                translateY.setOffset(0);
                yOffset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? MAX_TRANSLATE_Y : 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                yOffset = opened ? MAX_TRANSLATE_Y : 0;
                translateY.setOffset(yOffset);
                translateY.setValue(0);
            });

        }
    }

    function handleNextIndicator(event) {
        const currentOffset = event.nativeEvent.contentOffset.x;

        if (currentOffset != xOffset) {
            let nextIndex = 0;
            const direction = currentOffset > xOffset ? 'right' : 'left';
            const currentIndex = indicatorIndex;

            if (direction === 'right') {
                const next = (indicatorIndex + 1);
                nextIndex = next >= indicators.length ? 0 : nextIndex = next;
            } else {
                const previous = (indicatorIndex - 1);
                nextIndex = previous < 0 ? 0 : previous;
            }

            indicators[currentIndex].active = false;
            indicators[nextIndex].active = true;
            setIindicatorIndex(nextIndex);
            setIndicators([...indicators]);
            setXOffset(currentOffset);
        }
    }

    return (
        <>
            <Container>
                <Menu translateY={translateY} />
                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChanged}
                >
                    <ContentContainer style={{
                        transform: [{
                            translateY: translateY.interpolate({
                                inputRange: [-380, 0, MAX_TRANSLATE_Y],
                                outputRange: [-50, 0, MAX_TRANSLATE_Y],
                                extrapolate: 'clamp',
                            }),
                        }],
                    }}>
                        <Content>
                            <TabsContainer
                                onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { x: new Animated.Value(0) } } }],
                                    { useNativeDriver: true }
                                )}
                                onMomentumScrollEnd={handleNextIndicator}
                                scrollEventThrottle={16}
                                pagingEnabled
                            >
                                <CreditCard key={0} />
                                <BankAccount key={1} />
                                <Rewards key={2} />
                            </TabsContainer>
                            <ScrollIndicators>
                                {indicators.map((indicator, i) => (
                                    <Indicator key={i} style={(indicator.active ? styles.activeIndicator : {})} />
                                ))}
                            </ScrollIndicators>
                        </Content>
                    </ContentContainer>
                </PanGestureHandler>
            </Container>
            <Footer translateY={translateY} />
        </>
    );
};

export default TabsCards;
