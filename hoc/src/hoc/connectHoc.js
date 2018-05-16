import React, { Component } from 'react';

const nothing = () => ({});

const connectHoc = (mapStateToProps=nothing, mapDispatchToProps=nothing) => {
    return (WrappedComponent) => {
        class hocComponent extends Component{
            constructor() {
                super(...arguments);
                this.onChange = this.onChange.bind(this);

                this.store = {};
            }
            componentWillUnmount() {
                this.context.store.unsubscribe(this.onChange);
            }
            componentDidMount() {
                this.context.store.subscribe(this.onChange);
            }
            onChange() {
                this.setState({});
            }
            render(){
                const store = this.context.store;

                const newProps = {
                    ...this.props,
                    ...mapStateToProps(store.getState()),
                    ...mapDispatchToProps(store.dispatch)
                }

                return (
                    <WrappedComponent {...newProps}>
                        
                    </WrappedComponent>
                )
            }
        }

        hocComponent.contextType = {
            store: React.PropTypes.object
        }

        return hocComponent;
    }
}

export default connectHoc;