import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2"

export const LineChartComponent = ({ coinPrice, coinHistory, coinName }) => {
    const cryptoCoinPrice = [];
    const cryptoCoinTimeStamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        cryptoCoinPrice.push(coinHistory?.data?.history[i]?.price)
        cryptoCoinTimeStamp.push(new Date(coinHistory?.data?.history[i]?.timestamp).toLocaleDateString())
    }

    const data = {
        labels: cryptoCoinTimeStamp,
        datasets: [
            {
                label: "Price in USD",
                data: cryptoCoinPrice,
                fill: false,
                // backgroundColor: '#0071bd'
            }
        ]
    }

    // const options = {
    //     scales: {
    //         yAxes: [
    //             {
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         ]
    //     }
    // }

    return <>
        <div className="section my-2">
            <div className="d-block d-md-flex align-items-center gap-4 justify-content-between ">
                <h2 className="text-primary fw-bold ">{coinName} Price Chart</h2>
                <div className="d-flex gap-3">
                    <p className="fw-bold m-0">Price Change: ${coinHistory?.data?.change}</p>
                    <p className="fw-bold m-0  text-end">Current Price: ${coinPrice}</p>
                </div>
            </div>
            <div className="container-fluid">
                <Line data={data} />
            </div>
        </div>
    </>
}