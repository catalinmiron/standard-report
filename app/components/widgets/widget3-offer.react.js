var React = require('react');

var Widget3Offer = React.createClass({
    getInitialState: function() {
        return {
            offers: [
                {
                    likes: 3,
                    shares: 0,
                    views: 10,
                    location_views: 5,
                    date: 'Sun 1, Oct',
                    title: 'New Arrivals',
                    description: 'De peste mari si tari adunate',
                    image_url: '/assets/img/dashboard/7.jpg'
                }
            ]
        }
    }
    , componentDidMount: function () {
        //$(".widget-3 .metro").liveTile();
    }
    , render: function() {


        var tiles = this.state.offers.map(function(offer, index){
            var styles = {
                'background-image': 'url("'+offer.image_url+'")',
                'background-repeat': 'no-repeat',
                'background-size': '498px 498px'
            };
            return (
                <div className="tiles slide active" style={styles}>
                    <div className="panel-heading">
                        <div className="panel-controls">
                            <ul>
                                <li><a href="#" className="portlet-refresh" data-toggle="refresh"><i className="portlet-icon portlet-icon-refresh-lg-white"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="pull-bottom bottom-left bottom-right padding-25">
                            <span className="label font-montserrat fs-11">Worst Offer</span>
                            <br />
                            <h3 className="text-white">{offer.title}</h3>
                            <p className="text-white hint-text hidden-md">{offer.description}</p>
                            <ul className="list-inline ">
                                      <li>
                                        <a href="#" className="no-decoration"><i className="fa fa-share"></i>
                                            {offer.shares}
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="widget-3-fav no-decoration"><i className="pg-like"></i>
                                        {offer.likes}
                                        </a>
                                      </li>
                                    <li>
                                        <a href="#" className="no-decoration"><i className="pg-map"></i>
                                        {offer.location_views}
                                        </a>
                                      </li>
                                <li>
                                        <a href="#" className="no-decoration"><i className="fa fa-eye"></i>
                                        {offer.views}
                                        </a>
                                      </li>
                                </ul>
                        </div>
                    </div>

                </div>
            );
        })

        return (
                <div className="ar-1-1">
                    {/* START WIDGET */}
                    <div className="widget-3 panel no-border bg-complete no-margin widget-loader-bar">
                        <div className="panel-body no-padding">
                            <div className="metro live-tile" data-mode="carousel" data-start-now="true" data-delay="3000" data-direction="vertical" data-pause-onhover="true">
                            {tiles}
                            </div>
                        </div>
                    </div>
                    {/* END WIDGET */}
                </div>
            )
    }
});

module.exports = Widget3Offer;
