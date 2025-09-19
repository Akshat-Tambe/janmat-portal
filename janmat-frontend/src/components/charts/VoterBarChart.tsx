import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface Props {
  data: { name: string; voters: number }[];
}

const VoterBarChart: React.FC<Props> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-white"
    >
      <h2 className="text-xl font-semibold mb-4">
        👥 Voter Participation
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} barSize={40}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis dataKey="name" stroke="#e5e7eb" />
          <YAxis stroke="#e5e7eb" />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              backgroundColor: "rgba(17, 24, 39, 0.85)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          />
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <Bar dataKey="voters" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default VoterBarChart;
