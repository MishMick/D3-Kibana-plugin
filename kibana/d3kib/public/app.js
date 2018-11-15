import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { Schemas } from 'ui/vis/editors/default/schemas';
import { CATEGORY } from 'ui/vis/vis_category';
import { barChart } from './vis/bar-chart';
import { donutChart } from './vis/donut-chart';
import { progressChart } from './vis/progress-chart';
import './css/styles.less';
class MyVisualization {
    constructor(el, vis) {
        this.el = el;
        this.vis = vis;
    }
    async render(visData, status) {
        console.warn("Vis ", this.vis.aggs);
        if (this.vis.aggs &&
            this.vis.aggs.bySchemaName.metric !== undefined &&
            this.vis.aggs.bySchemaName.viewBy !== undefined &&
            this.vis.aggs.bySchemaName.timeSplit !== undefined
        ) {
            console.warn("Metric agg data ", this.vis.aggs.bySchemaName.metric[0]);
            console.warn("View by agg data", this.vis.aggs.bySchemaName.viewBy[0]);
            console.warn("Time by agg data", this.vis.aggs.bySchemaName.timeSplit[0]);
            const viewByBuckets = this.vis.aggs[this.vis.aggs.bySchemaName.viewBy[0].id].buckets;
            console.warn("View by buckets ", viewByBuckets);
        }

        this.el.innerHTML = `
        <div id='vis-div' class='vis-container bodyDiv'>

        </div>`;

        // CREATE A D3 element
        barChart();
        donutChart();
        progressChart();
        return;
    }
    destroy() {
        this.el.innerHTML = '';
        console.log('destroying');
    }
}

const MyNewVisType = (Private) => {
    const VisFactory = Private(VisFactoryProvider);

    return VisFactory.createBaseVisualization({
        name: 'my_new_vis',
        title: 'My New Vis',
        icon: 'fa fa-bars',
        description: 'Cool new chart',
        category: CATEGORY.OTHER,
        responseHandler: 'none',
        editorConfig: {
            collections: {},
            schemas: new Schemas([
                {
                    group: 'metrics',
                    name: 'metric',
                    title: 'Value',
                    min: 1,
                    max: 1,
                    aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality']
                },
                {
                    group: 'buckets',
                    name: 'viewBy',
                    icon: 'fa fa-eye',
                    title: 'View By',
                    mustBeFirst: true,
                    min: 0,
                    max: 1,
                    aggFilter: 'terms'
                },
                {
                    group: 'buckets',
                    name: 'timeSplit',
                    icon: 'fa fa-th',
                    title: 'Time Field',
                    min: 1,
                    max: 1,
                    aggFilter: 'date_histogram'
                },
            ])
        },
        visualization: MyVisualization
    });
}

VisTypesRegistryProvider.register(MyNewVisType);