<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    name: 'bodyTemperature',
    data () {
        return {

            data: {
                labels: ['0時', '1時', '2時', '3時', '4時', '5時', '6時', '7時', '8時', '9時', '10時', '11時', '12時', '13時', '14時', '15時', '16時', '17時', '18時', '19時', '20時', '21時', '22時', '23時'],
                datasets: [
                {
                    label: '体温(℃)',
                    data: [36.5, 36.4, 36.6, 36.7, 36.9, 37.2, 37.3, 37.2, 37.0, 36.5, 36.3, 36.5, 36.6, 35.9, 36.3, 36.6, 36.4, 36.5, 36.8, 36.4, 36.7, 36.9, 37.1, 37.0],
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
                            stepSize: 1,
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