<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    name: 'Serotonin',
    data () {
        return {
            data: {
                labels: ['0時', '1時', '2時', '3時', '4時', '5時', '6時', '7時', '8時', '9時', '10時', '11時', '12時', '13時', '14時', '15時', '16時', '17時', '18時', '19時', '20時', '21時', '22時', '23時'],
                datasets: [
                {
                    label: 'セロトニン(ng/mL)',
                    data: [112, 129, 124, 130, 139, 151, 147, 149, 150, 139, 128, 126, 129, 130, 123, 124, 129, 119, 125, 132, 137, 128, 126, 120],
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