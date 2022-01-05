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
                    label: '最高血圧(mmHg)',
                    data: [124, 126, 129, 127, 126, 125, 129, 131, 126, 128, 129, 123, 127, 126, 133, 136, 141, 134, 133, 129, 131, 128, 127, 125],
                    borderColor: '#FF7777',
                    fill: false,
                    type: 'line',
                    lineTension: 0,
                },
                {
                    label: '最低血圧(mmHg)',
                    data: [85, 86, 88, 91, 91, 93, 87, 82, 86, 89, 86, 81, 79, 86, 82, 84, 89, 92, 91, 87, 81, 84, 87, 83],
                    borderColor: '#CFD8DC',
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