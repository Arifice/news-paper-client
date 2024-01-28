

import { BarChart, Bar, XAxis, YAxis, CartesianGrid,PieChart, Pie,  Cell } from 'recharts';

import { axiosSecure } from '../Hooks/useAxiosSecure';
import { axiosPublic } from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
const Chart = () => {
   
    const {data: stat={}}=useQuery({
        queryKey: ['articles-stat'],
        queryFn: async()=>{
            const res=await axiosPublic.get('/articles-stat');
            return res.data;
        }
    })
    console.log(stat.length);
    console.log(stat,typeof(stat))
    // const piechartData=stat.map(item=>{
    //     return {name: item?._id, value: item?.count};
    // });
    // console.log(piechartData);

    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

    //     return (
    //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };

    return (
        <div className="flex">
            <div className="w-1/3">
                {/* <PieChart width={400} height={400}>
                    <Pie
                        data={stat}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey={stat?.count}
                    >
                        {stat.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart> */}

            </div>
            <div className="w-2/3">

            </div>

        </div>
    );
};

export default Chart;