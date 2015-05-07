var React = require('react');

var Widget12WalkinsGraph = React.createClass({
    getInitialState: function() {


        var gender_data =
                [{"key":"Women","values":[[1025409600000,0],[1028088000000,6.3382185140371],[1030766400000,5.9507873460847],[1033358400000,11.569146943813],[1036040400000,5.4767332317425],[1038632400000,0.50794682203014],[1041310800000,5.5310285460542],[1043989200000,5.7838296963382],[1046408400000,7.3249341615649],[1049086800000,6.7078630712489],[1051675200000,0.44227126150934],[1054353600000,7.2481659343222],[1056945600000,9.2512381306992],[1059624000000,11.341210982529],[1062302400000,14.73482040902],[1064894400000,12.387148007542],[1067576400000,18.436471461827],[1070168400000,19.830742266977],[1072846800000,22.643205829887],[1075525200000,26.743156781239],[1078030800000,29.597478802228],[1080709200000,30.831697585341],[1083297600000,28.054068024708],[1085976000000,29.294079423832],[1088568000000,30.269264061274],[1091246400000,24.934526898906],[1093924800000,24.265982759406],[1096516800000,27.217794897473],[1099195200000,30.802601992077],[1101790800000,36.331003758254],[1104469200000,43.14249870006],[1107147600000,40.558263931958],[1109566800000,42.5436223858],[1112245200000,41.683584710331],[1114833600000,36.375367302328],[1117512000000,40.71968898073],[1120104000000,43.897963036919],[1122782400000,49.797033975368],[1125460800000,47.085993935989],[1128052800000,46.601972859745],[1130734800000,41.567784572762],[1133326800000,47.296923737245],[1136005200000,47.64296961208],[1138683600000,50.781515820954],[1141102800000,52.600229204305],[1143781200000,55.599684490628],[1146369600000,57.920388436633],[1149048000000,53.503593218971],[1151640000000,53.522973979964],[1154318400000,49.846822298548],[1156996800000,54.72134161465],[1159588800000,58.186236223191],[1162270800000,63.908065540997],[1164862800000,69.767285129367],[1167541200000,72.534013373592],[1170219600000,77.991819436573],[1172638800000,78.14358440499],[1175313600000,83.702398665233],[1177905600000,91.140859312418],[1180584000000,98.590960607028],[1183176000000,96.245634754228],[1185854400000,92.326364432615],[1188532800000,97.06876533223],[1191124800000,105.8102555626],[1193803200000,114.38348777791],[1196398800000,103.5960494981],[1199077200000,101.72488429307],[1201755600000,89.840147735028],[1204261200000,86.963597532664],[1206936000000,84.075505208491],[1209528000000,93.170105645831],[1212206400000,103.62838083121],[1214798400000,87.458241365091],[1217476800000,85.808374141319],[1220155200000,93.158054469193],[1222747200000,65.97325238236],[1225425600000,44.580686638224],[1228021200000,36.418977140128],[1230699600000,38.727678144761],[1233378000000,36.692674173387],[1235797200000,30.03302280948],[1238472000000,36.707532162718],[1241064000000,52.191457688389],[1243742400000,56.357883979735],[1246334400000,57.629002180305],[1249012800000,66.650985790166],[1251691200000,70.839243432186],[1254283200000,78.731998491499],[1256961600000,72.375528540349],[1259557200000,81.73838788163],[1262235600000,87.539792394232],[1264914000000,84.320762662273],[1267333200000,90.621278391889],[1270008000000,102.47144881651],[1272600000000,102.79320353429],[1275278400000,90.529736050479],[1277870400000,76.580859994531],[1280548800000,86.548979376972],[1283227200000,81.879653334089],[1285819200000,101.72550015956],[1288497600000,107.9796485226],[1291093200000,106.16240630785],[1293771600000,114.84268599533],[1296450000000,121.60793322282],[1298869200000,133.41437346605],[1301544000000,125.46646042904],[1304136000000,129.76784954301],[1306814400000,128.15798861044],[1309406400000,121.92388706072],[1312084800000,116.7003610087],[1314763200000,88.367701837033],[1317355200000,59.159665765725],[1320033600000,79.793568139753],[1322629200000,75.903834028417],[1325307600000,72.704218209157],[1327986000000,84.936990804097],[1330491600000,93.388148670744]]},{"key":"Men","values":[[1025409600000,0],[1028088000000,0],[1030766400000,0],[1033358400000,0],[1036040400000,0],[1038632400000,0],[1041310800000,0],[1043989200000,0],[1046408400000,0],[1049086800000,0],[1051675200000,0],[1054353600000,0],[1056945600000,0],[1059624000000,0],[1062302400000,0],[1064894400000,0],[1067576400000,0],[1070168400000,0],[1072846800000,0],[1075525200000,0.049184266875945],[1078030800000,0.10757569491991],[1080709200000,0.075601531307242],[1083297600000,0.061245277988149],[1085976000000,0.068227316401169],[1088568000000,0.11242758058502],[1091246400000,0.07484843940827],[1093924800000,0.11465623676497],[1096516800000,0.24370633342416],[1099195200000,0.21523268478893],[1101790800000,0.37859370911822],[1104469200000,0.41932884345151],[1107147600000,0.45393735984802],[1109566800000,0.50868179522598],[1112245200000,0.48164396881207],[1114833600000,0.41605962887194],[1117512000000,0.4849034849024],[1120104000000,0.55071036101311],[1122782400000,0.67489170505394],[1125460800000,0.74978070939342],[1128052800000,0.86395050745343],[1130734800000,0.78524898506764],[1133326800000,0.99800440950854],[1136005200000,1.1177951153878],[1138683600000,1.4119975432964],[1141102800000,1.2409959736465],[1143781200000,1.3088936375431],[1146369600000,1.5495785469683],[1149048000000,1.1563414981293],[1151640000000,0.87192471725994],[1154318400000,0.84073995183442],[1156996800000,0.8876189286737],[1159588800000,0.81748513917485],[1162270800000,1.2874081041274],[1164862800000,1.9234702981339],[1167541200000,1.8377768147648],[1170219600000,2.710765403183],[1172638800000,2.6493268125418],[1175313600000,3.0814553134551],[1177905600000,3.8509837783574],[1180584000000,5.2919167850718],[1183176000000,5.2297750650773],[1185854400000,3.9335668501451],[1188532800000,2.3695525190114],[1191124800000,2.3084243151854],[1193803200000,3.0753680726738],[1196398800000,2.2346609938962],[1199077200000,3.0598810361615],[1201755600000,1.8410154270386],[1204261200000,1.647944203862],[1206936000000,1.929385862278],[1209528000000,3.0769590460943],[1212206400000,4.2423933501421],[1214798400000,2.6951491617768],[1217476800000,2.8981825939957],[1220155200000,2.9662727940324],[1222747200000,0.21556750497498],[1225425600000,2.6784995167088],[1228021200000,4.1296711248958],[1230699600000,3.7311068218734],[1233378000000,4.7695330866954],[1235797200000,5.191913304099],[1238472000000,4.102585604566],[1241064000000,2.8498939666225],[1243742400000,2.8106017222851],[1246334400000,2.8456526669963],[1249012800000,0.65563070754298],[1251691200000,0.30022343874633],[1254283200000,1.1600358228964],[1256961600000,0.26674408835052],[1259557200000,1.4693389757812],[1262235600000,2.7855421590594],[1264914000000,1.2668244065703],[1267333200000,2.5537804115548],[1270008000000,4.9144552474502],[1272600000000,6.0484408234831],[1275278400000,3.383434903375],[1277870400000,0.46752826932523],[1280548800000,1.8030186027963],[1283227200000,0.99623230097881],[1285819200000,3.3475370235594],[1288497600000,3.8187026520342],[1291093200000,4.2354146250353],[1293771600000,5.6795404292885],[1296450000000,6.2928665328172],[1298869200000,6.8549277434419],[1301544000000,6.9925308360918],[1304136000000,8.3216548655839],[1306814400000,7.7682867271435],[1309406400000,6.9244213301058],[1312084800000,5.7407624451404],[1314763200000,2.1813149077927],[1317355200000,2.9407596325999],[1320033600000,1.1130607112134],[1322629200000,2.0274822307752],[1325307600000,1.8372559072154],[1327986000000,4.0732815531148],[1330491600000,6.4417038470291]]}];
        gender_data.push({
            key: "Total",
            values: gender_data[0].values.map(function (item, index) {
                return [item[0], gender_data[1].values[index][1] + item[1]]
            })
        });
        return {
            data: gender_data
        }
    }
    , componentDidMount: function () {
        var _this = this;
        nv.addGraph(function() {
        var chart = nv.models.lineChart()
            .x(function(d) {
                return d[0]
            })
            .y(function(d) {
                return d[1]
            })
            .color([
                $.Pages.getColor('success'),
                $.Pages.getColor('danger'),
                $.Pages.getColor('primary'),
                $.Pages.getColor('complete'),

            ])
            .showLegend(false)
            .margin({
                left: 30,
                bottom: 35
            })
            .useInteractiveGuideline(true);

        chart.xAxis
            .tickFormat(function(d) {
                return d3.time.format('%a')(new Date(d))
            });

        chart.yAxis.tickFormat(d3.format('d'));

        d3.select('.nvd3-line svg')
            .datum(_this.state.data)
            .transition().duration(500)
            .call(chart);

        nv.utils.windowResize(chart.update);

        $('.nvd3-line').data('chart', chart);

        return chart;
    });

    }
    , render: function() {

        var total_w = Math.round(this.state.data[0].values.map(function(item){
            return item[1];
        }).reduce(function(a, b){return a + b;}))
        var total_m = Math.round(this.state.data[1].values.map(function(item){
            return item[1];
        }).reduce(function(a, b){return a + b;}))
        var total = Math.round(this.state.data[2].values.map(function(item){
            return item[1];
        }).reduce(function(a, b){return a + b;}))
        return (
                <div className="col-md-12">
                    {/* START WIDGET */}
                    <div className="widget-12 panel no-border widget-loader-circle no-margin">
                        <div className="row">
                            <div className="col-xlg-8 ">
                                <div className="panel-heading pull-up top-right ">
                                    <div className="panel-controls">
                                        <ul>
                                            <li className="hidden-xlg">
                                                <div className="dropdown">
                                                    <a data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
                                                        <i className="portlet-icon portlet-icon-settings"></i>
                                                    </a>
                                                    <ul className="dropdown-menu pull-right" role="menu">
                                                        <li><a href="#">AAPL</a>
                                                        </li>
                                                        <li><a href="#">YHOO</a>
                                                        </li>
                                                        <li><a href="#">GOOG</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a data-toggle="refresh" className="portlet-refresh text-black" href="#"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-xlg-8 ">
                                    <div className="p-l-10">
                                        <h2 className="pull-left">Weekly Walk-ins</h2>
                                        <h2 className="pull-left m-l-50 text-danger">
                                            <span className="bold">{total}</span>
                                        </h2>
                                        <div className="clearfix"></div>
                                        <div className="full-width">
                                            <ul className="list-inline">
                                                <li><a href="#" className="font-montserrat text-master">1D</a>
                                                </li>
                                                <li className="active"><a href="#" className="font-montserrat  bg-master-light text-master">5D</a>
                                                </li>
                                                <li><a href="#" className="font-montserrat text-master">1M</a>
                                                </li>
                                                <li><a href="#" className="font-montserrat text-master">1Y</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="nvd3-line line-chart text-center" data-x-grid="false">
                                            <svg></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xlg-4 visible-xlg">
                                    <div className="widget-12-search">
                                        <p className="pull-left">Breakdown by
                                        <span className="bold"> Gender</span>
                                        </p>
                                        <button className="btn btn-default btn-xs pull-right">
                                            <span className="bold">+</span>
                                        </button>
                                        <div className="clearfix"></div>
                                        <input type="text" placeholder="Search list" className="form-control m-t-5" />
                                            </div>
                                    <div className="company-stat-boxes">
                                        <div data-index="0" className="company-stat-box m-t-15 active padding-20 bg-master-lightest">
                                            <div>
                                                <button type="button" className="close" data-dismiss="modal">
                                                    <i className="pg-close fs-12"></i>
                                                </button>
                                                <p className="company-name pull-left text-uppercase bold no-margin">
                                                <span className="fa fa-circle text-success fs-11"></span> Women
                                                </p>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="m-t-10">
                                                <p className="pull-left small hint-text no-margin p-t-5">Walk-ins</p>
                                                <div className="pull-right">
                                                    <p className="small hint-text no-margin inline">{total_w}</p>
                                                    <span className=" label label-important p-t-5 m-l-5 p-b-5 inline fs-12">+ 0.09</span>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                        <div data-index="1" className="company-stat-box m-t-15  padding-20 bg-master-lightest">
                                            <div>
                                                <button type="button" className="close" data-dismiss="modal">
                                                    <i className="pg-close fs-12"></i>
                                                </button>
                                                <p className="company-name pull-left text-uppercase bold no-margin">
                                                <span className="fa fa-circle text-primary fs-11"></span> Men
                                                </p>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="m-t-10">
                                                <p className="pull-left small hint-text no-margin p-t-5">Walk-ins</p>
                                                <div className="pull-right">
                                                    <p className="small hint-text no-margin inline">{total_m}</p>
                                                    <span className=" label label-success p-t-5 m-l-5 p-b-5 inline fs-12">+ 0.09</span>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                        <div data-index="2" className="company-stat-box m-t-15  padding-20 bg-master-lightest">
                                            <div>
                                                <button type="button" className="close" data-dismiss="modal">
                                                    <i className="pg-close fs-12"></i>
                                                </button>
                                                <p className="company-name pull-left text-uppercase bold no-margin">
                                                <span className="fa fa-circle text-complete fs-11"></span> Total
                                                </p>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="m-t-10">
                                                <p className="pull-left small hint-text no-margin p-t-5">Walk-ins</p>
                                                <div className="pull-right">
                                                    <p className="small hint-text no-margin inline">{total}</p>
                                                    <span className=" label label-success p-t-5 m-l-5 p-b-5 inline fs-12">+ 0.09</span>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END WIDGET */}
                </div>
            )
    }
});

module.exports = Widget12WalkinsGraph;
