
/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GeneratePropsCpp.js
 */

#include <react/renderer/components/rnscreens/Props.h>
#include <react/renderer/core/PropsParserContext.h>
#include <react/renderer/core/propsConversions.h>

namespace facebook::react {

RNSFullWindowOverlayProps::RNSFullWindowOverlayProps(
    const PropsParserContext &context,
    const RNSFullWindowOverlayProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps)

    
      {}
RNSModalScreenProps::RNSModalScreenProps(
    const PropsParserContext &context,
    const RNSModalScreenProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps),

    sheetAllowedDetents(convertRawProp(context, rawProps, "sheetAllowedDetents", sourceProps.sheetAllowedDetents, {RNSModalScreenSheetAllowedDetents::Large})),
    sheetLargestUndimmedDetent(convertRawProp(context, rawProps, "sheetLargestUndimmedDetent", sourceProps.sheetLargestUndimmedDetent, {RNSModalScreenSheetLargestUndimmedDetent::All})),
    sheetGrabberVisible(convertRawProp(context, rawProps, "sheetGrabberVisible", sourceProps.sheetGrabberVisible, {false})),
    sheetCornerRadius(convertRawProp(context, rawProps, "sheetCornerRadius", sourceProps.sheetCornerRadius, {-1.0})),
    sheetExpandsWhenScrolledToEdge(convertRawProp(context, rawProps, "sheetExpandsWhenScrolledToEdge", sourceProps.sheetExpandsWhenScrolledToEdge, {false})),
    customAnimationOnSwipe(convertRawProp(context, rawProps, "customAnimationOnSwipe", sourceProps.customAnimationOnSwipe, {false})),
    fullScreenSwipeEnabled(convertRawProp(context, rawProps, "fullScreenSwipeEnabled", sourceProps.fullScreenSwipeEnabled, {false})),
    homeIndicatorHidden(convertRawProp(context, rawProps, "homeIndicatorHidden", sourceProps.homeIndicatorHidden, {false})),
    preventNativeDismiss(convertRawProp(context, rawProps, "preventNativeDismiss", sourceProps.preventNativeDismiss, {false})),
    gestureEnabled(convertRawProp(context, rawProps, "gestureEnabled", sourceProps.gestureEnabled, {true})),
    statusBarColor(convertRawProp(context, rawProps, "statusBarColor", sourceProps.statusBarColor, {})),
    statusBarHidden(convertRawProp(context, rawProps, "statusBarHidden", sourceProps.statusBarHidden, {false})),
    screenOrientation(convertRawProp(context, rawProps, "screenOrientation", sourceProps.screenOrientation, {})),
    statusBarAnimation(convertRawProp(context, rawProps, "statusBarAnimation", sourceProps.statusBarAnimation, {})),
    statusBarStyle(convertRawProp(context, rawProps, "statusBarStyle", sourceProps.statusBarStyle, {})),
    statusBarTranslucent(convertRawProp(context, rawProps, "statusBarTranslucent", sourceProps.statusBarTranslucent, {false})),
    gestureResponseDistance(convertRawProp(context, rawProps, "gestureResponseDistance", sourceProps.gestureResponseDistance, {})),
    stackPresentation(convertRawProp(context, rawProps, "stackPresentation", sourceProps.stackPresentation, {RNSModalScreenStackPresentation::Push})),
    stackAnimation(convertRawProp(context, rawProps, "stackAnimation", sourceProps.stackAnimation, {RNSModalScreenStackAnimation::Default})),
    transitionDuration(convertRawProp(context, rawProps, "transitionDuration", sourceProps.transitionDuration, {350})),
    replaceAnimation(convertRawProp(context, rawProps, "replaceAnimation", sourceProps.replaceAnimation, {RNSModalScreenReplaceAnimation::Pop})),
    swipeDirection(convertRawProp(context, rawProps, "swipeDirection", sourceProps.swipeDirection, {RNSModalScreenSwipeDirection::Horizontal})),
    hideKeyboardOnSwipe(convertRawProp(context, rawProps, "hideKeyboardOnSwipe", sourceProps.hideKeyboardOnSwipe, {false})),
    activityState(convertRawProp(context, rawProps, "activityState", sourceProps.activityState, {-1.0})),
    navigationBarColor(convertRawProp(context, rawProps, "navigationBarColor", sourceProps.navigationBarColor, {})),
    navigationBarTranslucent(convertRawProp(context, rawProps, "navigationBarTranslucent", sourceProps.navigationBarTranslucent, {false})),
    navigationBarHidden(convertRawProp(context, rawProps, "navigationBarHidden", sourceProps.navigationBarHidden, {false})),
    nativeBackButtonDismissalEnabled(convertRawProp(context, rawProps, "nativeBackButtonDismissalEnabled", sourceProps.nativeBackButtonDismissalEnabled, {false}))
      {}
RNSScreenContainerProps::RNSScreenContainerProps(
    const PropsParserContext &context,
    const RNSScreenContainerProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps)

    
      {}
RNSScreenProps::RNSScreenProps(
    const PropsParserContext &context,
    const RNSScreenProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps),

    sheetAllowedDetents(convertRawProp(context, rawProps, "sheetAllowedDetents", sourceProps.sheetAllowedDetents, {RNSScreenSheetAllowedDetents::Large})),
    sheetLargestUndimmedDetent(convertRawProp(context, rawProps, "sheetLargestUndimmedDetent", sourceProps.sheetLargestUndimmedDetent, {RNSScreenSheetLargestUndimmedDetent::All})),
    sheetGrabberVisible(convertRawProp(context, rawProps, "sheetGrabberVisible", sourceProps.sheetGrabberVisible, {false})),
    sheetCornerRadius(convertRawProp(context, rawProps, "sheetCornerRadius", sourceProps.sheetCornerRadius, {-1.0})),
    sheetExpandsWhenScrolledToEdge(convertRawProp(context, rawProps, "sheetExpandsWhenScrolledToEdge", sourceProps.sheetExpandsWhenScrolledToEdge, {false})),
    customAnimationOnSwipe(convertRawProp(context, rawProps, "customAnimationOnSwipe", sourceProps.customAnimationOnSwipe, {false})),
    fullScreenSwipeEnabled(convertRawProp(context, rawProps, "fullScreenSwipeEnabled", sourceProps.fullScreenSwipeEnabled, {false})),
    homeIndicatorHidden(convertRawProp(context, rawProps, "homeIndicatorHidden", sourceProps.homeIndicatorHidden, {false})),
    preventNativeDismiss(convertRawProp(context, rawProps, "preventNativeDismiss", sourceProps.preventNativeDismiss, {false})),
    gestureEnabled(convertRawProp(context, rawProps, "gestureEnabled", sourceProps.gestureEnabled, {true})),
    statusBarColor(convertRawProp(context, rawProps, "statusBarColor", sourceProps.statusBarColor, {})),
    statusBarHidden(convertRawProp(context, rawProps, "statusBarHidden", sourceProps.statusBarHidden, {false})),
    screenOrientation(convertRawProp(context, rawProps, "screenOrientation", sourceProps.screenOrientation, {})),
    statusBarAnimation(convertRawProp(context, rawProps, "statusBarAnimation", sourceProps.statusBarAnimation, {})),
    statusBarStyle(convertRawProp(context, rawProps, "statusBarStyle", sourceProps.statusBarStyle, {})),
    statusBarTranslucent(convertRawProp(context, rawProps, "statusBarTranslucent", sourceProps.statusBarTranslucent, {false})),
    gestureResponseDistance(convertRawProp(context, rawProps, "gestureResponseDistance", sourceProps.gestureResponseDistance, {})),
    stackPresentation(convertRawProp(context, rawProps, "stackPresentation", sourceProps.stackPresentation, {RNSScreenStackPresentation::Push})),
    stackAnimation(convertRawProp(context, rawProps, "stackAnimation", sourceProps.stackAnimation, {RNSScreenStackAnimation::Default})),
    transitionDuration(convertRawProp(context, rawProps, "transitionDuration", sourceProps.transitionDuration, {350})),
    replaceAnimation(convertRawProp(context, rawProps, "replaceAnimation", sourceProps.replaceAnimation, {RNSScreenReplaceAnimation::Pop})),
    swipeDirection(convertRawProp(context, rawProps, "swipeDirection", sourceProps.swipeDirection, {RNSScreenSwipeDirection::Horizontal})),
    hideKeyboardOnSwipe(convertRawProp(context, rawProps, "hideKeyboardOnSwipe", sourceProps.hideKeyboardOnSwipe, {false})),
    activityState(convertRawProp(context, rawProps, "activityState", sourceProps.activityState, {-1.0})),
    navigationBarColor(convertRawProp(context, rawProps, "navigationBarColor", sourceProps.navigationBarColor, {})),
    navigationBarTranslucent(convertRawProp(context, rawProps, "navigationBarTranslucent", sourceProps.navigationBarTranslucent, {false})),
    navigationBarHidden(convertRawProp(context, rawProps, "navigationBarHidden", sourceProps.navigationBarHidden, {false})),
    nativeBackButtonDismissalEnabled(convertRawProp(context, rawProps, "nativeBackButtonDismissalEnabled", sourceProps.nativeBackButtonDismissalEnabled, {false}))
      {}
RNSScreenNavigationContainerProps::RNSScreenNavigationContainerProps(
    const PropsParserContext &context,
    const RNSScreenNavigationContainerProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps)

    
      {}
RNSScreenStackHeaderConfigProps::RNSScreenStackHeaderConfigProps(
    const PropsParserContext &context,
    const RNSScreenStackHeaderConfigProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps),

    backgroundColor(convertRawProp(context, rawProps, "backgroundColor", sourceProps.backgroundColor, {})),
    backTitle(convertRawProp(context, rawProps, "backTitle", sourceProps.backTitle, {})),
    backTitleFontFamily(convertRawProp(context, rawProps, "backTitleFontFamily", sourceProps.backTitleFontFamily, {})),
    backTitleFontSize(convertRawProp(context, rawProps, "backTitleFontSize", sourceProps.backTitleFontSize, {0})),
    backTitleVisible(convertRawProp(context, rawProps, "backTitleVisible", sourceProps.backTitleVisible, {true})),
    color(convertRawProp(context, rawProps, "color", sourceProps.color, {})),
    direction(convertRawProp(context, rawProps, "direction", sourceProps.direction, {RNSScreenStackHeaderConfigDirection::Ltr})),
    hidden(convertRawProp(context, rawProps, "hidden", sourceProps.hidden, {false})),
    hideShadow(convertRawProp(context, rawProps, "hideShadow", sourceProps.hideShadow, {false})),
    largeTitle(convertRawProp(context, rawProps, "largeTitle", sourceProps.largeTitle, {false})),
    largeTitleFontFamily(convertRawProp(context, rawProps, "largeTitleFontFamily", sourceProps.largeTitleFontFamily, {})),
    largeTitleFontSize(convertRawProp(context, rawProps, "largeTitleFontSize", sourceProps.largeTitleFontSize, {0})),
    largeTitleFontWeight(convertRawProp(context, rawProps, "largeTitleFontWeight", sourceProps.largeTitleFontWeight, {})),
    largeTitleBackgroundColor(convertRawProp(context, rawProps, "largeTitleBackgroundColor", sourceProps.largeTitleBackgroundColor, {})),
    largeTitleHideShadow(convertRawProp(context, rawProps, "largeTitleHideShadow", sourceProps.largeTitleHideShadow, {false})),
    largeTitleColor(convertRawProp(context, rawProps, "largeTitleColor", sourceProps.largeTitleColor, {})),
    translucent(convertRawProp(context, rawProps, "translucent", sourceProps.translucent, {false})),
    title(convertRawProp(context, rawProps, "title", sourceProps.title, {})),
    titleFontFamily(convertRawProp(context, rawProps, "titleFontFamily", sourceProps.titleFontFamily, {})),
    titleFontSize(convertRawProp(context, rawProps, "titleFontSize", sourceProps.titleFontSize, {0})),
    titleFontWeight(convertRawProp(context, rawProps, "titleFontWeight", sourceProps.titleFontWeight, {})),
    titleColor(convertRawProp(context, rawProps, "titleColor", sourceProps.titleColor, {})),
    disableBackButtonMenu(convertRawProp(context, rawProps, "disableBackButtonMenu", sourceProps.disableBackButtonMenu, {false})),
    backButtonDisplayMode(convertRawProp(context, rawProps, "backButtonDisplayMode", sourceProps.backButtonDisplayMode, {RNSScreenStackHeaderConfigBackButtonDisplayMode::Default})),
    hideBackButton(convertRawProp(context, rawProps, "hideBackButton", sourceProps.hideBackButton, {false})),
    backButtonInCustomView(convertRawProp(context, rawProps, "backButtonInCustomView", sourceProps.backButtonInCustomView, {false})),
    topInsetEnabled(convertRawProp(context, rawProps, "topInsetEnabled", sourceProps.topInsetEnabled, {false}))
      {}
RNSScreenStackHeaderSubviewProps::RNSScreenStackHeaderSubviewProps(
    const PropsParserContext &context,
    const RNSScreenStackHeaderSubviewProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps),

    type(convertRawProp(context, rawProps, "type", sourceProps.type, {RNSScreenStackHeaderSubviewType::Left}))
      {}
RNSScreenStackProps::RNSScreenStackProps(
    const PropsParserContext &context,
    const RNSScreenStackProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps)

    
      {}
RNSSearchBarProps::RNSSearchBarProps(
    const PropsParserContext &context,
    const RNSSearchBarProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps),

    hideWhenScrolling(convertRawProp(context, rawProps, "hideWhenScrolling", sourceProps.hideWhenScrolling, {false})),
    autoCapitalize(convertRawProp(context, rawProps, "autoCapitalize", sourceProps.autoCapitalize, {RNSSearchBarAutoCapitalize::None})),
    placeholder(convertRawProp(context, rawProps, "placeholder", sourceProps.placeholder, {})),
    placement(convertRawProp(context, rawProps, "placement", sourceProps.placement, {RNSSearchBarPlacement::Stacked})),
    obscureBackground(convertRawProp(context, rawProps, "obscureBackground", sourceProps.obscureBackground, {false})),
    hideNavigationBar(convertRawProp(context, rawProps, "hideNavigationBar", sourceProps.hideNavigationBar, {false})),
    cancelButtonText(convertRawProp(context, rawProps, "cancelButtonText", sourceProps.cancelButtonText, {})),
    barTintColor(convertRawProp(context, rawProps, "barTintColor", sourceProps.barTintColor, {})),
    tintColor(convertRawProp(context, rawProps, "tintColor", sourceProps.tintColor, {})),
    textColor(convertRawProp(context, rawProps, "textColor", sourceProps.textColor, {})),
    disableBackButtonOverride(convertRawProp(context, rawProps, "disableBackButtonOverride", sourceProps.disableBackButtonOverride, {false})),
    inputType(convertRawProp(context, rawProps, "inputType", sourceProps.inputType, {})),
    hintTextColor(convertRawProp(context, rawProps, "hintTextColor", sourceProps.hintTextColor, {})),
    headerIconColor(convertRawProp(context, rawProps, "headerIconColor", sourceProps.headerIconColor, {})),
    shouldShowHintSearchIcon(convertRawProp(context, rawProps, "shouldShowHintSearchIcon", sourceProps.shouldShowHintSearchIcon, {true}))
      {}

} // namespace facebook::react
