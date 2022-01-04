<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    name: 'Dopamine',
    data () {
        return {

            data: {
                labels: ['0時', '1時', '2時', '3時', '4時', '5時', '6時', '7時', '8時', '9時', '10時', '11時', '12時', '13時', '14時', '15時', '16時', '17時', '18時', '19時', '20時', '21時', '22時', '23時'],
                datasets: [
                {
                    label: 'ドーパミン(ng/mL)',
                    data: [1.6, 1.2, 1.8, 1.6, 1.2, 1.9, 2.3, 1.9, 1.7, 1.6, 1.2, 0.8, 1.4, 1.3, 1.7, 1.9, 1.6, 1.3, 1.4, 1.6, 1.8, 1.5, 1.2, 1.6],
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