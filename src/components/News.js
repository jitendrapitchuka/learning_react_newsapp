import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: 'general',
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category}-NewsDaily`;
    }
<<<<<<< HEAD
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey={this.props.apiKey}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
=======

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(50);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
>>>>>>> fb9d502... added top reload bar,refactored whole code
        })
        this.props.setProgress(100);

    }
    async componentDidMount() {
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=174599a2c3ba4f4bbd02dc571c945920&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // this.setState({articles:parsedData.articles,
        //     totalResults:parsedData.totalResults,
        //     loading:false
        // })
        this.updateNews();

<<<<<<< HEAD
    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey={this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
      
            this.setState(
                {
                    page:this.state.page-1,
                    articles:parsedData.articles,
                    loading:false
                }
            )
    }
    handleNextClick=async()=>{
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey={this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data=await fetch(url);
            let parsedData=await data.json();
            
                this.setState(
                    {
                        page:this.state.page+1,
                        articles:parsedData.articles,
                        loading:false
                    }
                )
        }
       
=======
    }

    handlePrevClick = async () => {
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=174599a2c3ba4f4bbd02dc571c945920&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data=await fetch(url);
        // let parsedData=await data.json();

        //     this.setState(
        //         {
        //             page:this.state.page-1,
        //             articles:parsedData.articles,
        //             loading:false
        //         }
        //     )
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    handleNextClick = async () => {
        // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=174599a2c3ba4f4bbd02dc571c945920&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true})
        //     let data=await fetch(url);
        //     let parsedData=await data.json();

        //         this.setState(
        //             {
        //                 page:this.state.page+1,
        //                 articles:parsedData.articles,
        //                 loading:false
        //             }
        //         )
        // }
        this.setState({ page: this.state.page + 1 });
        this.updateNews();


>>>>>>> fb9d502... added top reload bar,refactored whole code
    }
    fetchMoreData = async () => {

        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=174599a2c3ba4f4bbd02dc571c945920&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults

        })
    };


    render() {
        return (

            <>
                <h2 className='text-center'>NewsDaily-Top Headlines</h2>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >

                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>

                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between" >
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                    </div> */}


            </>

        )
    }
}

export default News
