import { ChartData } from "./ChartData";
import { MarketData } from "./MarketData";

function isChartData(data: ChartData | MarketData): data is ChartData {
    return (data as ChartData).idx !== undefined;
}

function isMarketData(data: ChartData | MarketData): data is MarketData {
    return (data as MarketData).name !== "";
}

export * from './ChartData';
export * from './MarketData';
export {
    isChartData,
    isMarketData
}