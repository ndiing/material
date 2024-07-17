import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevChartComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <div id="chart_div"></div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        google.charts.load("current", { packages: ["corechart", "bar"] });
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {
            var data = google.visualization.arrayToDataTable([
                ["City", "2010 Population"],
                ["New York City, NY", 8175000],
                ["Los Angeles, CA", 3792000],
                ["Chicago, IL", 2695000],
                ["Houston, TX", 2099000],
                ["Philadelphia, PA", 1526000],
            ]);

            var options = {
                title: "Population of Largest U.S. Cities",
                chartArea: { width: "50%" },
                hAxis: {
                    title: "Total Population",
                    minValue: 0,
                },
                vAxis: {
                    title: "City",
                },
            };

            var chart = new google.visualization.BarChart(document.getElementById("chart_div"));

            chart.draw(data, options);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }
}

customElements.define("dev-chart", DevChartComponent);

export default document.createElement("dev-chart");
