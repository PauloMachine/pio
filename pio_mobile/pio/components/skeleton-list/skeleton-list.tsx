import { useWindowDimensions, View } from "react-native"
import ContentLoader, { Rect } from "react-content-loader/native"

const SkeletonList = () => {
    const { width, height } = useWindowDimensions()

    return (
        <ContentLoader
            speed={2}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            backgroundColor="#dddddd"
            foregroundColor="#ecebeb"
        >
            <Rect x="0" y="5" rx="5" ry="5" width={width} height="70" />
            <Rect x="0" y="80" rx="5" ry="5" width={width} height="70" />
            <Rect x="0" y="155" rx="5" ry="5" width={width} height="70" />
            <Rect x="0" y="230" rx="5" ry="5" width={width} height="70" />
            <Rect x="0" y="305" rx="5" ry="5" width={width} height="70" />
            <Rect x="0" y="380" rx="5" ry="5" width={width} height="70" />
            <Rect x="0" y="455" rx="5" ry="5" width={width} height="70" />
        </ContentLoader>
    )
}

export default SkeletonList