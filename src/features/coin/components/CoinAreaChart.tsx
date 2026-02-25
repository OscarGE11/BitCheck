import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { FlatCoinMarketChartData } from '../models/Coin';
import { formatPrice } from '../utils/marketDataFormats';
interface CoinAreaChartProps {
  flatData: FlatCoinMarketChartData[];
}
export default function CoinAreaChart({ flatData }: CoinAreaChartProps) {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={700}
          height={400}
          data={flatData}
          margin={{ top: 20, right: 0, left: 35, bottom: 10 }}
        >
          <XAxis
            dataKey="date"
            type="number"
            domain={['dataMin', 'dataMax']}
            tickCount={5}
            tickMargin={20}
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'short',
              })
            }
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />

          <YAxis
            orientation="right"
            width={70}
            padding={{ bottom: 20 }}
            tickMargin={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={formatPrice}
            domain={['auto', 'auto + 2000']}
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />
          <Tooltip
            labelFormatter={(value) =>
              new Date(value as number).toLocaleString('es-ES')
            }
            formatter={(value) => [
              `$${value?.toLocaleString('en-US')}`,
              'Price',
            ]}
            contentStyle={{
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '12px',
            }}
            labelStyle={{
              color: '#94a3b8',
              fontSize: '12px',
            }}
            itemStyle={{
              color: '#f8fafc',
              fontWeight: 500,
            }}
          />

          <Area
            type="monotone"
            dataKey="price"
            stroke="rgba(255, 183, 77, 1)"
            fill="rgba(255, 152, 0, 0.6)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
