import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import Toast, { BaseToastProps, ToastConfig } from 'react-native-toast-message';

const PRIMARY = '#9d56ccff';

// -------------------- ProgressBar --------------------
interface ProgressBarProps {
    duration?: number;
    trigger?: any;
}

function ProgressBar({ duration = 5000, trigger }: ProgressBarProps) {
    const anim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        anim.setValue(1);
        Animated.timing(anim, {
            toValue: 0,
            duration,
            useNativeDriver: false,
        }).start();
    }, [anim, duration, trigger]);

    const width = anim.interpolate({ inputRange: [0, 10], outputRange: ['0%', '100%'] });

    return (
        <View style={styles.progressTrack}>
            <Animated.View style={[styles.progressBar, { width }]} />
        </View>
    );
}

// -------------------- Toast Cards --------------------
interface ToastCardProps {
    text1?: string;
    text2?: string;
    onClose?: () => void;
    duration?: number;
    trigger?: any;
}

function ToastCardSuccess({ text1, text2, onClose, duration = 5000, trigger }: ToastCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.checkCircleSuccess}>
                    <Text style={styles.checkText}>✓</Text>
                </View>
                <View style={{ flex: 1, marginHorizontal: 12 }}>
                    {!!text1 && <Text style={styles.title}>{text1}</Text>}
                    {!!text2 && <Text style={styles.subtitle}>{text2}</Text>}
                </View>
                <TouchableOpacity onPress={onClose} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                    <Text style={styles.close}>X</Text>
                </TouchableOpacity>
            </View>
            <ProgressBar duration={duration} trigger={trigger} />
        </View>
    );
}

function ToastCardError({ text1, text2, onClose, duration = 5000, trigger }: ToastCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.checkCircleError}>
                    <Text style={styles.checkText}>X</Text>
                </View>
                <View style={{ flex: 1, marginHorizontal: 12 }}>
                    {!!text1 && <Text style={styles.title}>{text1}</Text>}
                    {!!text2 && <Text style={styles.subtitle}>{text2}</Text>}
                </View>
                <TouchableOpacity onPress={onClose} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                    <Text style={styles.close}>×</Text>
                </TouchableOpacity>
            </View>
            <ProgressBar duration={duration} trigger={trigger} />
        </View>
    );
}

// -------------------- Toast wrappers --------------------
const SuccessToast = ({ text1, text2, ...rest }: BaseToastProps) => {
    const duration = (rest as any)?.props?.duration ?? 5000;
    const trigger = Math.random(); // trigger único
    return (
        <ToastCardSuccess
            key={trigger}
            text1={text1}
            text2={text2}
            duration={duration}
            onClose={() => Toast.hide()}
            trigger={trigger}
        />
    );
};

const ErrorToast = ({ text1, text2, ...rest }: BaseToastProps) => {
    const duration = (rest as any)?.props?.duration ?? 5000;
    const trigger = Math.random();
    return (
        <ToastCardError
            key={trigger}
            text1={text1}
            text2={text2}
            duration={duration}
            onClose={() => Toast.hide()}
            trigger={trigger}
        />
    );
};

// -------------------- ToastConfig --------------------
export const toastConfig: ToastConfig = {
    success: (p) => <SuccessToast {...p} />,
    error: (p) => <ErrorToast {...p} />,
};

// -------------------- Helper functions para disparar --------------------
export function showSuccessToast(text1: string, text2: string, duration = 5000) {
    const uniqueType = `success-${Math.random()}`;
    toastConfig[uniqueType] = (props) => <SuccessToast {...props} />;
    Toast.show({
        type: uniqueType,
        text1,
        text2,
        visibilityTime: duration,
        autoHide: true,
        position: 'top',
    });
}

export function showErrorToast(text1: string, text2?: string, duration = 5000) {
    const uniqueType = `error-${Math.random()}`;
    toastConfig[uniqueType] = (props) => <ErrorToast {...props} />;
    Toast.show({
        type: uniqueType,
        text1,
        text2,
        visibilityTime: duration,
        autoHide: true,
        position: 'top',
    });
}

// -------------------- Styles --------------------
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 0,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 25,
        width: '85%',
        minWidth: 300,
        minHeight: 70,
    },
    row: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16 },
    checkCircleSuccess: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkCircleError: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        backgroundColor: "#e61e1eff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkText: { color: '#fff', fontSize: 18, fontWeight: '700' },
    title: { color: '#333', fontSize: 16, fontWeight: '600' },
    subtitle: { color: '#666', fontSize: 14, marginTop: 2 },
    close: { fontSize: 20, color: '#555', opacity: 0.8 },
    progressTrack: {
        alignSelf: "center",
        borderRadius: 0,
        height: 3,
        marginTop: 22,
        width: '85%',
        backgroundColor: "#ddd",
        overflow: 'hidden',
    },
    progressBar: { height: 3, backgroundColor: PRIMARY },
});
