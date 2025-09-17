// src/components/charts/TrendLineChart.tsx
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,

} from "recharts";

interface Props {
  data: { month: string; elections: number }[];
}

const TrendLineChart: React.FC<Props> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-white"
    >
      <h2 className="text-xl font-semibold mb-4">
        📈 Election Trends
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis dataKey="month" stroke="#e5e7eb" />
          <YAxis stroke="#e5e7eb" />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              backgroundColor: "rgba(17, 24, 39, 0.8)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#16A34A" stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="elections"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={{ r: 5, fill: "#4ADE80", stroke: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>

  );
};

export default TrendLineChart;
