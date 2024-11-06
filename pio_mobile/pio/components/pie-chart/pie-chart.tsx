import React, { useMemo } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { formatMoney } from "../../utils/format-money";
import styles from "./pie-chart.styles";
import { CustomPieChartProps } from "./pie-chart.types";

const CustomPieChart = ({ data, accessor, title }: CustomPieChartProps) => {
    const { width } = useWindowDimensions();

    const sortedData = useMemo(() => {
        return [...data].sort((a, b) => b[accessor] - a[accessor]);
    }, [data, accessor]);

    return (
        <View style={[styles.container, {
            minHeight: sortedData.length > 3 ? 300 : 250,
            maxHeight: sortedData.length > 3 ? 300 : 250,
        }]}>
            <Text>{title || 'Não informado'}</Text>
            <PieChart
                data={data}
                width={width}
                height={sortedData.length > 3 ? 150 : 130}
                chartConfig={{
                    backgroundColor: "#ffffff",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(54,64,81, ${opacity})`,
                }}
                accessor={accessor}
                backgroundColor="transparent"
                hasLegend={false}
                paddingLeft={String(width / 4)}
            />
            <View>
                {sortedData.map((dataItem) => (
                    <View style={styles.legendItem} key={dataItem.name || 'no-name'}>
                        <View style={[styles.title, { backgroundColor: dataItem.color }]} />
                        <Text style={styles.legendItemValue}>
                            {formatMoney(dataItem[accessor] || 0)}
                        </Text>
                        <Text>{dataItem.name || 'Não informado'}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default CustomPieChart;
