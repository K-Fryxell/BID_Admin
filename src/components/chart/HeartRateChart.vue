<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    name: 'BloodPressure',
    data () {
        return {

            data: {
                labels: ['0時', '1時', '2時', '3時', '4時', '5時', '6時', '7時', '8時', '9時', '10時', '11時', '12時', '13時', '14時', '15時', '16時', '17時', '18時', '19時', '20時', '21時', '22時', '23時'],
                datasets: [
                {
                    label: '心拍数(bpm)',
                    data: [73, 79, 82, 83, 88, 84, 77, 79, 82, 79, 92, 84, 82, 78, 87, 82, 79, 86, 81, 87, 83, 77, 79, 85],
                    borderColor: '#FF7777',
                    fill: false,
                    type: 'line',
                    lineTension: 0,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: '時間'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            stepSize: 10,
                        }
                    }]
                }
            }
        }
    },
    mounted () {
        this.renderChart(this.data, this.options)
    }
}
</script>