// src/components/charts/ElectionPieChart.tsx
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  data: { name: string; value: number }[];
}

const COLORS = ["#2563EB", "#16A34A", "#F59E0B", "#EF4444"];

const ElectionPieChart: React.FC<Props> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-card rounded-2xl p-6 hover:shadow-lg transition-shadow"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        🗳️ Election Status
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
  data={data}
  cx="50%"
  cy="50%"
  outerRadius={100}
  label={(entry) =>
    `${entry.name} ${((entry.percent ?? 0) * 100).toFixed(0)}%`
  }
  dataKey="value"
>

            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#fff"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ElectionPieChart;
