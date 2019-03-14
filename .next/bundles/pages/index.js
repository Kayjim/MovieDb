module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([3],{

/***/ "./node_modules/@appbaseio/reactivecore/lib/actions/component.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.addComponent=addComponent;exports.removeComponent=removeComponent;exports.watchComponent=watchComponent;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");var _query=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/query.js");function addComponent(component){return{type:_constants.ADD_COMPONENT,component:component};}function removeComponent(component){return{type:_constants.REMOVE_COMPONENT,component:component};}function updateWatchman(component,react){return{type:_constants.WATCH_COMPONENT,component:component,react:react};}function watchComponent(component,react){return function(dispatch){dispatch(updateWatchman(component,react));dispatch((0,_query.executeQuery)(component));};}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/actions/hits.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.updateAggs=updateAggs;exports.updateHits=updateHits;exports.pushToStreamHits=pushToStreamHits;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function updateAggs(component,aggregations){var append=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return{type:_constants.UPDATE_AGGS,component:component,aggregations:aggregations,append:append};}function updateHits(component,hits,time){var append=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;return{type:_constants.UPDATE_HITS,component:component,hits:hits.hits,total:hits.total,time:time,append:append};}function pushToStreamHits(component,hit){return{type:_constants.PUSH_TO_STREAM_HITS,component:component,hit:hit};}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/actions/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _component=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/component.js");Object.keys(_component).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _component[key];}});});var _hits=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/hits.js");Object.keys(_hits).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _hits[key];}});});var _maps=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/maps.js");Object.keys(_maps).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _maps[key];}});});var _query=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/query.js");Object.keys(_query).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _query[key];}});});var _value=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/value.js");Object.keys(_value).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _value[key];}});});

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/actions/maps.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.updateMapData=updateMapData;exports.setMapData=setMapData;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");var _query=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/query.js");function updateMapData(componentId,query,persistMapQuery){return{type:_constants.SET_MAP_DATA,componentId:componentId,query:query,persistMapQuery:persistMapQuery};}function setMapData(componentId,query,persistMapQuery,forceExecute){return function(dispatch){dispatch(updateMapData(componentId,query,persistMapQuery));if(forceExecute){var executeWatchList=false;var mustExecuteMapQuery=true;dispatch((0,_query.executeQuery)(componentId,executeWatchList,mustExecuteMapQuery));}};}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/actions/query.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.setQuery=setQuery;exports.updateQueryOptions=updateQueryOptions;exports.logQuery=logQuery;exports.logCombinedQuery=logCombinedQuery;exports.setStreaming=setStreaming;exports.setHeaders=setHeaders;exports.setPromotedResults=setPromotedResults;exports.executeQuery=executeQuery;exports.setQueryOptions=setQueryOptions;exports.updateQuery=updateQuery;exports.loadMore=loadMore;exports.setQueryListener=setQueryListener;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");var _value=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/value.js");var _hits=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/hits.js");var _helper=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");var _analytics=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/analytics.js");var _analytics2=_interopRequireDefault(_analytics);var _maps=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/maps.js");var _graphQL=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/graphQL.js");var _graphQL2=_interopRequireDefault(_graphQL);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function setQuery(component,query){return{type:_constants.SET_QUERY,component:component,query:query};}function updateQueryOptions(component,options){return{type:_constants.SET_QUERY_OPTIONS,component:component,options:options};}function logQuery(component,query){return{type:_constants.LOG_QUERY,component:component,query:query};}function logCombinedQuery(component,query){return{type:_constants.LOG_COMBINED_QUERY,component:component,query:query};}function setLoading(component,isLoading){return{type:_constants.SET_LOADING,component:component,isLoading:isLoading};}function setError(component,error){return{type:_constants.SET_ERROR,component:component,error:error};}function setTimestamp(component,timestamp){return{type:_constants.SET_TIMESTAMP,component:component,timestamp:timestamp};}function setStreaming(component){var status=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var ref=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;return{type:_constants.SET_STREAMING,component:component,status:status,ref:ref};}function setHeaders(headers){return{type:_constants.SET_HEADERS,headers:headers};}function setPromotedResults(){var results=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return{type:_constants.SET_PROMOTED_RESULTS,results:results};}function setSearchId(){var searchId=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;return{type:_constants.SET_SEARCH_ID,searchId:searchId};}function msearch(query,orderOfQueries){var appendToHits=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var isInternalComponent=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var appendToAggs=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;return function(dispatch,getState){var _getState=getState(),appbaseRef=_getState.appbaseRef,config=_getState.config,headers=_getState.headers,queryListener=_getState.queryListener,analytics=_getState.analytics,selectedValues=_getState.selectedValues;var searchHeaders={};if(config.analytics&&!isInternalComponent){var searchValue=analytics.searchValue,searchId=analytics.searchId;var filterString=(0,_analytics2.default)(selectedValues);if(searchId){searchHeaders=_extends({'X-Search-Id':searchId},filterString&&{'X-Search-Filters':filterString});}else if(searchValue){searchHeaders=_extends({'X-Search-Query':searchValue},filterString&&{'X-Search-Filters':filterString});}}orderOfQueries.forEach(function(component){dispatch(setLoading(component,true));});var handleTransformResponse=function handleTransformResponse(res){if(config.transformResponse&&typeof config.transformResponse==='function'){return config.transformResponse(res);}return new Promise(function(resolve){return resolve(res);});};var handleResponse=function handleResponse(res){var searchId=res._headers?res._headers.get('X-Search-Id'):null;if(searchId){dispatch(setSearchId(searchId));}if(res.promoted){dispatch(setPromotedResults(res.promoted));}else{dispatch(setPromotedResults());}orderOfQueries.forEach(function(component,index){var response=res.responses[index];var _getState2=getState(),timestamp=_getState2.timestamp;if(timestamp[component]===undefined||timestamp[component]<res._timestamp){if(response.hits){dispatch(setTimestamp(component,res._timestamp));dispatch((0,_hits.updateHits)(component,response.hits,response.took,appendToHits));dispatch(setLoading(component,false));}if(response.aggregations){dispatch((0,_hits.updateAggs)(component,response.aggregations,appendToAggs));}}});};var handleError=function handleError(error){console.error(error);orderOfQueries.forEach(function(component){if(queryListener[component]&&queryListener[component].onError){queryListener[component].onError(error);}dispatch(setError(component,error));dispatch(setLoading(component,false));});};if(config.graphQLUrl){(0,_graphQL2.default)(config.graphQLUrl,config.url,config.credentials,config.app,query).then(function(res){return handleTransformResponse(res);}).then(function(res){handleResponse(res);}).catch(function(err){handleError(err);});}else{appbaseRef.setHeaders(_extends({},headers,searchHeaders));appbaseRef.msearch({type:config.type==='*'?'':config.type,body:query}).then(function(res){return handleTransformResponse(res);}).then(function(res){handleResponse(res);}).catch(function(err){handleError(err);});}};}function executeQueryListener(listener,oldQuery,newQuery){if(listener&&listener.onQueryChange){listener.onQueryChange(oldQuery,newQuery);}}function executeQuery(componentId){var executeWatchList=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var mustExecuteMapQuery=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return function(dispatch,getState){var _getState3=getState(),queryLog=_getState3.queryLog,stream=_getState3.stream,appbaseRef=_getState3.appbaseRef,config=_getState3.config,mapData=_getState3.mapData,watchMan=_getState3.watchMan,dependencyTree=_getState3.dependencyTree,queryList=_getState3.queryList,queryOptions=_getState3.queryOptions,queryListener=_getState3.queryListener;var orderOfQueries=[];var finalQuery=[];var matchAllQuery={match_all:{}};var componentList=[componentId];if(executeWatchList){var watchList=watchMan[componentId]||[];componentList=[].concat(_toConsumableArray(componentList),_toConsumableArray(watchList));}componentList.forEach(function(component){var _buildQuery=(0,_helper.buildQuery)(component,dependencyTree,queryList,queryOptions),queryObj=_buildQuery.queryObj,options=_buildQuery.options;var validOptions=['aggs','from','sort'];if(queryObj&&!!Object.keys(queryObj).length||options&&Object.keys(options).some(function(item){return validOptions.includes(item);})){if(!queryObj||queryObj&&!Object.keys(queryObj).length){queryObj=_extends({},matchAllQuery);}var currentQuery=_extends({query:_extends({},queryObj)},options,queryOptions[component]);var queryToLog=_extends({query:_extends({},queryObj)},options,queryOptions[component]);var oldQuery=queryLog[component];if(mustExecuteMapQuery||!(0,_helper.isEqual)(currentQuery,oldQuery)){orderOfQueries=[].concat(_toConsumableArray(orderOfQueries),[component]);dispatch(logQuery(component,queryToLog));var isMapComponent=Object.keys(mapData).includes(component);if(isMapComponent&&mapData[component].query){var existingQuery=currentQuery.query;currentQuery.query={bool:{must:[existingQuery,mapData[component].query]}};if(!mapData[component].persistMapQuery){dispatch((0,_maps.updateMapData)(componentId,null,false));}var _getState4=getState(),combinedLog=_getState4.combinedLog;if((0,_helper.isEqual)(combinedLog[component],currentQuery))return;dispatch(logCombinedQuery(component,currentQuery));}executeQueryListener(queryListener[component],oldQuery,currentQuery);if(stream[component]&&stream[component].status){if(stream[component].ref){stream[component].ref.stop();}var ref=appbaseRef.searchStream({type:config.type==='*'?'':config.type,body:currentQuery},function(response){if(response._id){dispatch((0,_hits.pushToStreamHits)(component,response));}},function(error){if(queryListener[component]&&queryListener[component].onError){queryListener[component].onError(error);}console.warn(error);dispatch(setError(component,error));dispatch(setLoading(component,false));});dispatch(setStreaming(component,true,ref));}finalQuery=[].concat(_toConsumableArray(finalQuery),[{preference:component},currentQuery]);}}});if(finalQuery.length){dispatch(msearch(finalQuery,orderOfQueries,false,componentId.endsWith('__internal')));}};}function setQueryOptions(component,queryOptions){var execute=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;return function(dispatch){dispatch(updateQueryOptions(component,queryOptions));if(execute){dispatch(executeQuery(component,true));}};}function updateQuery(_ref){var componentId=_ref.componentId,query=_ref.query,value=_ref.value,_ref$label=_ref.label,label=_ref$label===undefined?null:_ref$label,_ref$showFilter=_ref.showFilter,showFilter=_ref$showFilter===undefined?true:_ref$showFilter,_ref$URLParams=_ref.URLParams,URLParams=_ref$URLParams===undefined?false:_ref$URLParams,_ref$componentType=_ref.componentType,componentType=_ref$componentType===undefined?null:_ref$componentType,_ref$category=_ref.category,category=_ref$category===undefined?null:_ref$category;var execute=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;return function(dispatch){var queryToDispatch=query;if(query&&query.query){queryToDispatch=query.query;}if(!componentId.endsWith('__internal')){dispatch((0,_value.setValue)(componentId,value,label,showFilter,URLParams,componentType,category));}dispatch(setQuery(componentId,queryToDispatch));if(execute)dispatch(executeQuery(componentId,true));};}function loadMore(component,newOptions){var appendToHits=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var appendToAggs=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;return function(dispatch,getState){var store=getState();var _buildQuery2=(0,_helper.buildQuery)(component,store.dependencyTree,store.queryList,store.queryOptions),queryObj=_buildQuery2.queryObj,options=_buildQuery2.options;var queryLog=store.queryLog;if(!options)options={};options=_extends({},options,newOptions);if(!queryObj||queryObj&&!Object.keys(queryObj).length){queryObj={match_all:{}};}var currentQuery=_extends({query:_extends({},queryObj)},options);if((0,_helper.isEqual)(queryLog[component],currentQuery))return;dispatch(logQuery(component,currentQuery));var finalQuery=[{preference:component},currentQuery];dispatch(msearch(finalQuery,[component],appendToHits,false,appendToAggs));};}function setQueryListener(component,onQueryChange,onError){return{type:_constants.SET_QUERY_LISTENER,component:component,onQueryChange:onQueryChange,onError:onError};}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/actions/value.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.setValue=setValue;exports.patchValue=patchValue;exports.clearValues=clearValues;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function setValue(component,value,label,showFilter,URLParams,componentType,category){return{type:_constants.SET_VALUE,component:component,value:value,label:label,showFilter:showFilter,URLParams:URLParams,componentType:componentType,category:category};}function patchValue(component,payload){return{type:_constants.PATCH_VALUE,component:component,payload:payload};}function clearValues(){return{type:_constants.CLEAR_VALUES};}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/constants/index.js":
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var ADD_COMPONENT=exports.ADD_COMPONENT='ADD_COMPONENT';var REMOVE_COMPONENT=exports.REMOVE_COMPONENT='REMOVE_COMPONENT';var WATCH_COMPONENT=exports.WATCH_COMPONENT='WATCH_COMPONENT';var SET_QUERY=exports.SET_QUERY='SET_QUERY';var SET_QUERY_OPTIONS=exports.SET_QUERY_OPTIONS='SET_QUERY_OPTIONS';var EXECUTE_QUERY=exports.EXECUTE_QUERY='EXECUTE_QUERY';var UPDATE_HITS=exports.UPDATE_HITS='UPDATE_HITS';var UPDATE_AGGS=exports.UPDATE_AGGS='UPDATE_AGGS';var ADD_CONFIG=exports.ADD_CONFIG='ADD_CONFIG';var ADD_APPBASE_REF=exports.ADD_APPBASE_REF='ADD_APPBASE_REF';var LOG_QUERY=exports.LOG_QUERY='LOG_QUERY';var LOG_COMBINED_QUERY=exports.LOG_COMBINED_QUERY='LOG_COMBINED_QUERY';var SET_VALUE=exports.SET_VALUE='SET_VALUE';var PATCH_VALUE=exports.PATCH_VALUE='PATCH_VALUE';var CLEAR_VALUES=exports.CLEAR_VALUES='CLEAR_VALUES';var SET_LOADING=exports.SET_LOADING='SET_LOADING';var SET_ERROR=exports.SET_ERROR='SET_ERROR';var SET_STREAMING=exports.SET_STREAMING='SET_STREAMING';var PUSH_TO_STREAM_HITS=exports.PUSH_TO_STREAM_HITS='PUSH_TO_STREAM_HITS';var SET_TIMESTAMP=exports.SET_TIMESTAMP='SET_TIMESTAMP';var SET_HEADERS=exports.SET_HEADERS='SET_HEADERS';var SET_MAP_DATA=exports.SET_MAP_DATA='SET_MAP_DATA';var SET_QUERY_LISTENER=exports.SET_QUERY_LISTENER='SET_QUERY_LISTENER';var STORE_KEY=exports.STORE_KEY='__REACTIVESEARCH__';var SET_SEARCH_ID=exports.SET_SEARCH_ID='SET_SEARCH_ID';var SET_PROMOTED_RESULTS=exports.SET_PROMOTED_RESULTS='SET_PROMOTED_RESULTS';

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.polyfills=exports.storeKey=exports.Actions=exports.suggestions=exports.causes=exports.helper=undefined;exports.default=configureStore;var _redux=__webpack_require__("./node_modules/redux/es/redux.js");var _reduxThunk=__webpack_require__("./node_modules/redux-thunk/es/index.js");var _reduxThunk2=_interopRequireDefault(_reduxThunk);var _reducers=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/index.js");var _reducers2=_interopRequireDefault(_reducers);var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");var _actions=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/index.js");var Actions=_interopRequireWildcard(_actions);var _helper=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");var helper=_interopRequireWildcard(_helper);var _suggestions=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/suggestions.js");var _suggestions2=_interopRequireDefault(_suggestions);var _polyfills=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/polyfills.js");var _polyfills2=_interopRequireDefault(_polyfills);var _causes=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/causes.js");var _causes2=_interopRequireDefault(_causes);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var storeKey=_constants.STORE_KEY;var suggestions=_suggestions2.default;var causes=_causes2.default;exports.helper=helper;exports.causes=causes;exports.suggestions=suggestions;exports.Actions=Actions;exports.storeKey=storeKey;exports.polyfills=_polyfills2.default;var composeEnhancers=typeof window==='object'&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):_redux.compose;var enhancer=composeEnhancers((0,_redux.applyMiddleware)(_reduxThunk2.default));function configureStore(initialState){return(0,_redux.createStore)(_reducers2.default,initialState,enhancer);}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/aggsReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=aggsReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function aggsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.UPDATE_AGGS){if(action.append){var field=Object.keys(state[action.component])[0];var _action$aggregations$=action.aggregations[field],newBuckets=_action$aggregations$.buckets,aggsData=_objectWithoutProperties(_action$aggregations$,['buckets']);return _extends({},state,_defineProperty({},action.component,_defineProperty({},field,_extends({buckets:[].concat(_toConsumableArray(state[action.component][field].buckets),_toConsumableArray(newBuckets))},aggsData))));}return _extends({},state,_defineProperty({},action.component,action.aggregations));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/analyticsReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=analyticsReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");var initialState={searchValue:null,searchId:null};var searchComponents=['DATASEARCH','CATEGORYSEARCH'];function analyticsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];switch(action.type){case _constants.SET_VALUE:if(searchComponents.includes(action.componentType)){return{searchValue:action.value,searchId:null};}return state;case _constants.SET_SEARCH_ID:return _extends({},state,{searchId:action.searchId});default:return state;}}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/appbaseRefReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=appbaseRefReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function appbaseRefReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.ADD_APPBASE_REF){return action.appbaseRef;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/combinedLogsReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=combinedLogsReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function combinedLogsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.LOG_COMBINED_QUERY){return _extends({},state,_defineProperty({},action.component,action.query));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/componentsReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=componentsReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function componentsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];if(action.type===_constants.ADD_COMPONENT){return[].concat(_toConsumableArray(state),[action.component]);}else if(action.type===_constants.REMOVE_COMPONENT){return state.filter(function(element){return element!==action.component;});}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/configReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=configReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function configReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.ADD_CONFIG){return action.config;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/dependencyTreeReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=dependencyTreeReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function dependencyTreeReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.WATCH_COMPONENT){return _extends({},state,_defineProperty({},action.component,action.react));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/errorReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=errorReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function errorReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.SET_ERROR){return _extends({},state,_defineProperty({},action.component,action.error));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/headersReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=headersReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function headersReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.SET_HEADERS){return action.headers;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/hitsReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=hitsReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function hitsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.UPDATE_HITS){if(action.append){return _extends({},state,_defineProperty({},action.component,{hits:[].concat(_toConsumableArray(state[action.component].hits),_toConsumableArray(action.hits)),total:action.total,time:action.time}));}return _extends({},state,_defineProperty({},action.component,{hits:action.hits,total:action.total,time:action.time}));}else if(action.type===_constants.PUSH_TO_STREAM_HITS){var total=state[action.component].total;if(action.hit._deleted){total-=1;}else if(!action.hit._updated){total+=1;}return _extends({},state,_defineProperty({},action.component,_extends({},state[action.component],{total:total})));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _redux=__webpack_require__("./node_modules/redux/es/redux.js");var _componentsReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/componentsReducer.js");var _componentsReducer2=_interopRequireDefault(_componentsReducer);var _watchManReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/watchManReducer.js");var _watchManReducer2=_interopRequireDefault(_watchManReducer);var _dependencyTreeReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/dependencyTreeReducer.js");var _dependencyTreeReducer2=_interopRequireDefault(_dependencyTreeReducer);var _queryReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/queryReducer.js");var _queryReducer2=_interopRequireDefault(_queryReducer);var _queryOptionsReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/queryOptionsReducer.js");var _queryOptionsReducer2=_interopRequireDefault(_queryOptionsReducer);var _configReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/configReducer.js");var _configReducer2=_interopRequireDefault(_configReducer);var _appbaseRefReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/appbaseRefReducer.js");var _appbaseRefReducer2=_interopRequireDefault(_appbaseRefReducer);var _hitsReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/hitsReducer.js");var _hitsReducer2=_interopRequireDefault(_hitsReducer);var _aggsReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/aggsReducer.js");var _aggsReducer2=_interopRequireDefault(_aggsReducer);var _logsReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/logsReducer.js");var _logsReducer2=_interopRequireDefault(_logsReducer);var _combinedLogsReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/combinedLogsReducer.js");var _combinedLogsReducer2=_interopRequireDefault(_combinedLogsReducer);var _valueReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/valueReducer.js");var _valueReducer2=_interopRequireDefault(_valueReducer);var _loadingReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/loadingReducer.js");var _loadingReducer2=_interopRequireDefault(_loadingReducer);var _errorReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/errorReducer.js");var _errorReducer2=_interopRequireDefault(_errorReducer);var _streamingReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/streamingReducer.js");var _streamingReducer2=_interopRequireDefault(_streamingReducer);var _streamHitsReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/streamHitsReducer.js");var _streamHitsReducer2=_interopRequireDefault(_streamHitsReducer);var _timestampReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/timestampReducer.js");var _timestampReducer2=_interopRequireDefault(_timestampReducer);var _headersReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/headersReducer.js");var _headersReducer2=_interopRequireDefault(_headersReducer);var _mapDataReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/mapDataReducer.js");var _mapDataReducer2=_interopRequireDefault(_mapDataReducer);var _queryListenerReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/queryListenerReducer.js");var _queryListenerReducer2=_interopRequireDefault(_queryListenerReducer);var _analyticsReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/analyticsReducer.js");var _analyticsReducer2=_interopRequireDefault(_analyticsReducer);var _promotedResultsReducer=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/promotedResultsReducer.js");var _promotedResultsReducer2=_interopRequireDefault(_promotedResultsReducer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=(0,_redux.combineReducers)({components:_componentsReducer2.default,watchMan:_watchManReducer2.default,queryList:_queryReducer2.default,queryOptions:_queryOptionsReducer2.default,dependencyTree:_dependencyTreeReducer2.default,appbaseRef:_appbaseRefReducer2.default,config:_configReducer2.default,hits:_hitsReducer2.default,promotedResults:_promotedResultsReducer2.default,aggregations:_aggsReducer2.default,queryLog:_logsReducer2.default,combinedLog:_combinedLogsReducer2.default,selectedValues:_valueReducer2.default,isLoading:_loadingReducer2.default,error:_errorReducer2.default,stream:_streamingReducer2.default,streamHits:_streamHitsReducer2.default,timestamp:_timestampReducer2.default,headers:_headersReducer2.default,mapData:_mapDataReducer2.default,queryListener:_queryListenerReducer2.default,analytics:_analyticsReducer2.default});

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/loadingReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=loadingReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function loadingReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.SET_LOADING){return _extends({},state,_defineProperty({},action.component,action.isLoading));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/logsReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=logsReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function logsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.LOG_QUERY){return _extends({},state,_defineProperty({},action.component,action.query));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/mapDataReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=mapDataReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function mapDataReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.SET_MAP_DATA){return _defineProperty({},action.componentId,{query:action.query,persistMapQuery:action.persistMapQuery});}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/promotedResultsReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=promotedResultsReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function promotedResultsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];if(action.type===_constants.SET_PROMOTED_RESULTS){var results=action.results.map(function(item){return _extends({},item,{_promoted:true});});return results;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/queryListenerReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=queryListenerReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function queryListenerReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.SET_QUERY_LISTENER){return _extends({},state,_defineProperty({},action.component,{onQueryChange:action.onQueryChange,onError:action.onError}));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/queryOptionsReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=queryOptionsReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function queryOptionsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.SET_QUERY_OPTIONS){return _extends({},state,_defineProperty({},action.component,action.options));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/queryReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=queryReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function queryReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.SET_QUERY){return _extends({},state,_defineProperty({},action.component,action.query));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/streamHitsReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=streamHitsReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function streamHitsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.PUSH_TO_STREAM_HITS){var currentHits=state[action.component]||[];currentHits=currentHits.filter(function(item){return item._id!==action.hit._id;});return _extends({},state,_defineProperty({},action.component,[action.hit].concat(_toConsumableArray(currentHits))));}else if(action.type===_constants.SET_STREAMING){if(!action.status&&state[action.component]){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}}else if(action.type===_constants.REMOVE_COMPONENT){var _del=state[action.component],_obj=_objectWithoutProperties(state,[action.component]);return _obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/streamingReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=streamingReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function streamingReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.SET_STREAMING){if(!action.status&&state[action.component]&&state[action.component].ref){state[action.component].ref.stop();}return _extends({},state,_defineProperty({},action.component,{status:action.status,ref:action.ref}));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/timestampReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=timestampReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function timestampReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.SET_TIMESTAMP){return _extends({},state,_defineProperty({},action.component,action.timestamp));}else if(action.type===_constants.REMOVE_COMPONENT){var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/valueReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=valueReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function valueReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];switch(action.type){case _constants.SET_VALUE:return _extends({},state,_defineProperty({},action.component,{value:action.value,label:action.label||action.component,showFilter:action.showFilter,URLParams:action.URLParams,componentType:action.componentType,category:action.category}));case _constants.PATCH_VALUE:return _extends({},state,_defineProperty({},action.component,_extends({},state[action.component],action.payload)));case _constants.CLEAR_VALUES:return{};case _constants.REMOVE_COMPONENT:{var del=state[action.component],obj=_objectWithoutProperties(state,[action.component]);return obj;}default:return state;}}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/reducers/watchManReducer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=watchManReducer;var _constants=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/constants/index.js");function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function getWatchList(depTree){var list=Object.values(depTree);var components=[];list.forEach(function(item){if(typeof item==='string'){components.push(item);}else if(Array.isArray(item)){item.forEach(function(component){if(typeof component==='string'){components.push(component);}else{components.push.apply(components,_toConsumableArray(getWatchList(component)));}});}else if(typeof item==='object'&&item!==null){components.push.apply(components,_toConsumableArray(getWatchList(item)));}});return components.filter(function(value,index,array){return array.indexOf(value)===index;});}function watchManReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(action.type===_constants.WATCH_COMPONENT){var watchList=getWatchList(action.react);var newState=_extends({},state);Object.keys(newState).forEach(function(key){newState[key]=newState[key].filter(function(value){return value!==action.component;});});watchList.forEach(function(item){if(Array.isArray(newState[item])){newState[item]=[].concat(_toConsumableArray(newState[item]),[action.component]);}else{newState[item]=[action.component];}});return newState;}return state;}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/utils/analytics.js":
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var filterComponents=['NUMBERBOX','TAGCLOUD','TOGGLEBUTTON','DATEPICKER','DATERANGE','MULTIDATALIST','MULTIDROPDOWNLIST','MULTILIST','SINGLEDATALIST','SINGLEDROPDOWNLIST','SINGLELIST','DYNAMICRANGESLIDER','MULTIDROPDOWNRANGE','MULTIRANGE','RANGESLIDER','RATINGSFILTER','SINGLEDROPDOWNRANGE','SINGLERANGE'];var rangeComponents=['DATERANGE','DYNAMICRANGESLIDER','RANGESLIDER','RANGEINPUT','RATINGSFILTER'];var rangeObjectComponents=['SINGLERANGE','SINGLEDROPDOWNRANGE','MULTIRANGE','MULTIDROPDOWNRANGE'];function parseRangeObject(filterKey,rangeObject){return filterKey+'='+rangeObject.start+'~'+rangeObject.end;}function parseFilterValue(componentId,componentValues){var label=componentValues.label,value=componentValues.value,componentType=componentValues.componentType;var filterKey=label||componentId;if(rangeComponents.includes(componentType)){return filterKey+'='+value[0]+'~'+value[1];}else if(rangeObjectComponents.includes(componentType)){if(Array.isArray(value)){return value.map(function(item){return parseRangeObject(filterKey,item);}).join();}return parseRangeObject(filterKey,value);}else if(Array.isArray(value)){var isObject=typeof value[0]==='object'&&value[0]!==null;return isObject?value.map(function(item){return filterKey+'='+item.value;}).join():value.map(function(item){return filterKey+'='+item;}).join();}return filterKey+'='+value;}function getFilterString(selectedValues){if(selectedValues&&Object.keys(selectedValues).length){return Object.entries(selectedValues).filter(function(_ref){var _ref2=_slicedToArray(_ref,2),componentValues=_ref2[1];return filterComponents.includes(componentValues.componentType)&&(componentValues.value&&componentValues.value.length||componentValues.value.start||componentValues.value.end);}).map(function(_ref3){var _ref4=_slicedToArray(_ref3,2),componentId=_ref4[0],componentValues=_ref4[1];return parseFilterValue(componentId,componentValues);}).join();}return null;}exports.filterComponents=filterComponents;exports.rangeComponents=rangeComponents;exports.rangeObjectComponents=rangeObjectComponents;exports.parseFilterValue=parseFilterValue;exports.parseRangeObject=parseRangeObject;exports.default=getFilterString;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/utils/causes.js":
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var ENTER_PRESS='ENTER_PRESS';var SUGGESTION_SELECT='SUGGESTION_SELECT';var CLEAR_VALUE='CLEAR_VALUE';var causes={ENTER_PRESS:ENTER_PRESS,SUGGESTION_SELECT:SUGGESTION_SELECT,CLEAR_VALUE:CLEAR_VALUE};exports.default=causes;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/utils/dateFormats.js":
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var dateFormats={date:'yyyy-MM-dd',basic_date:'yyyyMMdd',basic_date_time:"yyyyMMdd'T'HHmmss.fffzzz",basic_date_time_no_millis:"yyyyMMdd'T'HHmmsszzz",date_time_no_millis:"yyyy-MM-dd'T'HH:mm:sszzz",basic_time:'HHmmss.fffzzz',basic_time_no_millis:'HHmmsszzz',epoch_millis:'epoch_millis',epoch_second:'epoch_second'};exports.default=dateFormats;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/utils/graphQL.js":
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var fetchGraphQL=function fetchGraphQL(graphQLUrl,url,credentials,app,query){var fetchUrl=credentials?url.replace('//','//'+credentials+'@'):url;return fetch(graphQLUrl,{method:'POST',body:'\n\t\t\tquery{\n\t\t\t\telastic50(host: "'+fetchUrl+'"){\n\t\t\t\t\tmsearch(\n\t\t\t\t\t\tindex: "'+app+'"\n\t\t\t\t\t\tbody: '+JSON.stringify(query.map(function(item){return JSON.stringify(item);}))+'\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t}\n\t\t',headers:{'Content-Type':'application/graphql'}}).then(function(res){return res.json();}).then(function(jsonRes){return jsonRes.data.elastic50.msearch;}).catch(function(error){console.error(error);});};exports.default=fetchGraphQL;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/utils/helper.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.getOptionsFromQuery=exports.parseHits=exports.handleA11yAction=exports.getInnerKey=exports.getClassName=exports.checkSomePropChange=exports.checkPropChange=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.isEqual=isEqual;exports.debounce=debounce;exports.getQueryOptions=getQueryOptions;exports.buildQuery=buildQuery;exports.pushToAndClause=pushToAndClause;exports.checkValueChange=checkValueChange;exports.getAggsOrder=getAggsOrder;exports.formatDate=formatDate;var _dateFormats=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/dateFormats.js");var _dateFormats2=_interopRequireDefault(_dateFormats);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function isEqual(x,y){if(x===y)return true;if(!(x instanceof Object)||!(y instanceof Object))return false;if(x.constructor!==y.constructor)return false;for(var p in x){if(!x.hasOwnProperty(p))continue;if(!y.hasOwnProperty(p))return false;if(x[p]===y[p])continue;if(typeof x[p]!=='object')return false;if(!isEqual(x[p],y[p]))return false;}for(var _p in y){if(y.hasOwnProperty(_p)&&!x.hasOwnProperty(_p))return false;}return true;}function debounce(callback,wait){var context=arguments.length>2&&arguments[2]!==undefined?arguments[2]:this;var timeout=null;var callbackArgs=null;var later=function later(){return callback.apply(context,callbackArgs);};return function debouncedFunction(){callbackArgs=arguments;clearTimeout(timeout);timeout=setTimeout(later,wait);};}function getQueryOptions(props){var options={};if(props.size!==undefined){options.size=props.size;}if(props.includeFields||props.excludeFields){var source={};if(props.includeFields){source.includes=props.includeFields;}if(props.excludeFields){source.excludes=props.excludeFields;}options._source=source;}return options;}function getOperation(conjunction){if(conjunction==='and'){return'must';}if(conjunction==='or'){return'should';}return'must_not';}function createBoolQuery(operation,query){var resultQuery=null;if(Array.isArray(query)&&query.length||!Array.isArray(query)&&query){resultQuery={bool:_defineProperty({},operation,query)};}if(operation==='should'&&resultQuery){resultQuery={bool:_extends({},resultQuery.bool,{minimum_should_match:1})};}return resultQuery;}function getQuery(react,queryList){var query=[];Object.keys(react).forEach(function(conjunction){if(Array.isArray(react[conjunction])){var operation=getOperation(conjunction);var queryArr=react[conjunction].map(function(comp){if(typeof comp!=='string'){return getQuery(comp,queryList);}else if(comp in queryList){return queryList[comp];}return null;}).filter(function(item){return!!item;});var boolQuery=createBoolQuery(operation,queryArr);if(boolQuery){query=[].concat(_toConsumableArray(query),[boolQuery]);}}else if(typeof react[conjunction]==='string'){var _operation=getOperation(conjunction);var _boolQuery=createBoolQuery(_operation,queryList[react[conjunction]]);if(_boolQuery){query=[].concat(_toConsumableArray(query),[_boolQuery]);}}else if(typeof react[conjunction]==='object'&&react[conjunction]!==null){var _boolQuery2=getQuery(react[conjunction],queryList);if(_boolQuery2){query=[].concat(_toConsumableArray(query),[_boolQuery2]);}}});if(Array.isArray(query)&&query.length){return{bool:{must:query}};}if(query&&Object.keys(query).length){return query;}return null;}function getExternalQueryOptions(react,options,component){var queryOptions={};Object.keys(react).forEach(function(conjunction){if(Array.isArray(react[conjunction])){react[conjunction].forEach(function(comp){if(options[comp]){queryOptions=_extends({},queryOptions,options[comp]);}});}else if(typeof react[conjunction]==='string'){if(options[react[conjunction]]){queryOptions=_extends({},queryOptions,options[react[conjunction]]);}}else if(typeof react[conjunction]==='object'&&react[conjunction]!==null&&!Array.isArray(react[conjunction])){queryOptions=_extends({},queryOptions,getExternalQueryOptions(react[conjunction],options));}});if(options[component]){queryOptions=_extends({},queryOptions,options[component]);}return queryOptions;}function buildQuery(component,dependencyTree,queryList,queryOptions){var queryObj=null;var options=null;if(component in dependencyTree){queryObj=getQuery(dependencyTree[component],queryList);options=getExternalQueryOptions(dependencyTree[component],queryOptions,component);}return{queryObj:queryObj,options:options};}function pushToAndClause(reactProp,component){var react=_extends({},reactProp);if(react.and){if(Array.isArray(react.and)){react.and=[].concat(_toConsumableArray(react.and),[component]);return react;}else if(typeof react.and==='string'){react.and=[react.and,component];return react;}react.and=pushToAndClause(react.and,component);return react;}return _extends({},react,{and:component});}function checkValueChange(componentId,value,beforeValueChange,performUpdate){var selectedValue=value;if(Array.isArray(value)&&!value.length){selectedValue=null;}if(beforeValueChange){beforeValueChange(selectedValue).then(performUpdate).catch(function(e){console.warn(componentId+' - beforeValueChange rejected the promise with ',e);});}else{performUpdate();}}function getAggsOrder(sortBy){if(sortBy==='count'){return{_count:'desc'};}return{_term:sortBy};}var checkPropChange=exports.checkPropChange=function checkPropChange(prevProp,nextProp,callback){if(!isEqual(prevProp,nextProp)){callback();return true;}return false;};var checkSomePropChange=exports.checkSomePropChange=function checkSomePropChange(prevProps,nextProps,propsList,callback){propsList.some(function(prop){return checkPropChange(prevProps[prop],nextProps[prop],callback);});};var getClassName=exports.getClassName=function getClassName(classMap,component){return classMap&&classMap[component]||'';};var getInnerKey=exports.getInnerKey=function getInnerKey(obj,key){return obj&&obj[key]||{};};var handleA11yAction=exports.handleA11yAction=function handleA11yAction(e,callback){if(e.key==='Enter'||e.key===' '){e.preventDefault();callback();}};var highlightResults=function highlightResults(result){var data=_extends({},result);if(data.highlight){Object.keys(data.highlight).forEach(function(highlightItem){var highlightValue=data.highlight[highlightItem][0];data._source=_extends({},data._source,_defineProperty({},highlightItem,highlightValue));});}return data;};var parseHits=exports.parseHits=function parseHits(hits){var results=null;if(hits){results=[].concat(_toConsumableArray(hits)).map(function(item){var streamProps={};if(item._updated){streamProps._updated=item._updated;}else if(item._deleted){streamProps._deleted=item._deleted;}var data=highlightResults(item);return _extends({_id:data._id,_index:data._index,_type:data._type,highlight:data.highlight||{}},data._source,streamProps);});}return results;};function formatDate(date,props){if(props.parseDate){return props.parseDate(date,props);}switch(props.queryFormat){case'epoch_millis':return date.getTime();case'epoch_seconds':return Math.floor(date.getTime()/1000);default:{if(_dateFormats2.default[props.queryFormat]){return date.toString(_dateFormats2.default[props.queryFormat]);}return date.getTime();}}}var getOptionsFromQuery=function getOptionsFromQuery(){var customQuery=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(customQuery){var query=customQuery.query,rest=_objectWithoutProperties(customQuery,['query']);return Object.keys(rest).length?rest:null;}return null;};exports.getOptionsFromQuery=getOptionsFromQuery;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/utils/polyfills.js":
/***/ (function(module, exports) {

if(!Array.prototype.find){Object.defineProperty(Array.prototype,'find',{value:function value(predicate){if(this==null){throw new TypeError('"this" is null or not defined');}var o=Object(this);var len=o.length>>>0;if(typeof predicate!=='function'){throw new TypeError('predicate must be a function');}var thisArg=arguments[1];var k=0;while(k<len){var kValue=o[k];if(predicate.call(thisArg,kValue,k,o)){return kValue;}k++;}return undefined;},configurable:true,writable:true});}if(!String.prototype.endsWith){String.prototype.endsWith=function(pattern){var d=this.length-pattern.length;return d>=0&&this.lastIndexOf(pattern)===d;};}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/utils/suggestions.js":
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var flatten=function flatten(arr){return arr.reduce(function(flat,toFlatten){return flat.concat(Array.isArray(toFlatten)?flatten(toFlatten):toFlatten);},[]);};var extractSuggestion=function extractSuggestion(val){switch(typeof val){case'string':return val;case'object':if(Array.isArray(val)){return flatten(val);}return null;default:return val;}};var getSuggestions=function getSuggestions(fields,suggestions,currentValue){var suggestionProperties=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[];var suggestionsList=[];var labelsList=[];var populateSuggestionsList=function populateSuggestionsList(val,source){var isWordMatch=currentValue.trim().split(' ').some(function(term){return String(val).toLowerCase().includes(term);});if(isWordMatch&&!labelsList.includes(val)){var defaultOption={label:val,value:val,source:source};var additionalKeys={};if(Array.isArray(suggestionProperties)&&suggestionProperties.length>0){suggestionProperties.forEach(function(prop){if(source.hasOwnProperty(prop)){additionalKeys=_extends({},additionalKeys,_defineProperty({},prop,source[prop]));}});}var option=_extends({},defaultOption,additionalKeys);labelsList=[].concat(_toConsumableArray(labelsList),[val]);suggestionsList=[].concat(_toConsumableArray(suggestionsList),[option]);}};var parseField=function parseField(source,field){if(typeof source==='object'){var fieldNodes=field.split('.');var label=source[fieldNodes[0]];if(label){if(fieldNodes.length>1){var children=field.substring(fieldNodes[0].length+1);if(Array.isArray(label)){label.forEach(function(arrayItem){parseField(arrayItem,children);});}else{parseField(label,children);}}else{var val=extractSuggestion(label);if(val){if(Array.isArray(val)){val.forEach(function(suggestion){return populateSuggestionsList(suggestion,source);});}else{populateSuggestionsList(val,source);}}}}}};suggestions.forEach(function(item){fields.forEach(function(field){parseField(item._source,field);});});return suggestionsList;};exports.default=getSuggestions;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivecore/lib/utils/types.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _propTypes=__webpack_require__("./node_modules/next/node_modules/prop-types/index.js");var _dateFormats=__webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/dateFormats.js");var _dateFormats2=_interopRequireDefault(_dateFormats);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var reactKeyType=(0,_propTypes.oneOfType)([_propTypes.string,(0,_propTypes.arrayOf)(_propTypes.string),_propTypes.object,(0,_propTypes.arrayOf)(_propTypes.object)]);function validateLocation(props,propName){if(isNaN(props[propName])){return new Error(propName+' value must be a number');}if(propName==='lat'&&(props[propName]<-90||props[propName]>90)){return new Error(propName+' value should be between -90 and 90.');}else if(propName==='lng'&&(props[propName]<-180||props[propName]>180)){return new Error(propName+' value should be between -180 and 180.');}return null;}var types={any:_propTypes.any,bool:_propTypes.bool,boolRequired:_propTypes.bool.isRequired,components:(0,_propTypes.arrayOf)(_propTypes.string),children:_propTypes.any,data:(0,_propTypes.arrayOf)(_propTypes.object),dataFieldArray:(0,_propTypes.oneOfType)([_propTypes.string,(0,_propTypes.arrayOf)(_propTypes.string)]).isRequired,dataNumberBox:(0,_propTypes.shape)({label:_propTypes.string,start:_propTypes.number.isRequired,end:_propTypes.number.isRequired}).isRequired,date:(0,_propTypes.oneOfType)([_propTypes.string,(0,_propTypes.arrayOf)(_propTypes.string)]),dateObject:_propTypes.object,excludeFields:(0,_propTypes.arrayOf)(_propTypes.string),fieldWeights:(0,_propTypes.arrayOf)(_propTypes.number),filterLabel:_propTypes.string,func:_propTypes.func,funcRequired:_propTypes.func.isRequired,fuzziness:(0,_propTypes.oneOf)([0,1,2,'AUTO']),headers:_propTypes.object,hits:(0,_propTypes.arrayOf)(_propTypes.object),iconPosition:(0,_propTypes.oneOf)(['left','right']),includeFields:(0,_propTypes.arrayOf)(_propTypes.string),labelPosition:(0,_propTypes.oneOf)(['left','right','top','bottom']),number:_propTypes.number,options:(0,_propTypes.oneOfType)([(0,_propTypes.arrayOf)(_propTypes.object),_propTypes.object]),paginationAt:(0,_propTypes.oneOf)(['top','bottom','both']),range:(0,_propTypes.shape)({start:_propTypes.number.isRequired,end:_propTypes.number.isRequired}),rangeLabels:(0,_propTypes.shape)({start:_propTypes.string.isRequired,end:_propTypes.string.isRequired}),react:(0,_propTypes.shape)({and:reactKeyType,or:reactKeyType,not:reactKeyType}),categorySearchValue:(0,_propTypes.shape)({term:_propTypes.string,category:_propTypes.string}),selectedValues:_propTypes.object,selectedValue:(0,_propTypes.oneOfType)([_propTypes.string,(0,_propTypes.arrayOf)(_propTypes.string),(0,_propTypes.arrayOf)(_propTypes.object),_propTypes.object,_propTypes.number,(0,_propTypes.arrayOf)(_propTypes.number)]),suggestions:(0,_propTypes.arrayOf)(_propTypes.object),supportedOrientations:(0,_propTypes.oneOf)(['portrait','portrait-upside-down','landscape','landscape-left','landscape-right']),tooltipTrigger:(0,_propTypes.oneOf)(['hover','none','focus','always']),sortBy:(0,_propTypes.oneOf)(['asc','desc']),sortOptions:(0,_propTypes.arrayOf)((0,_propTypes.shape)({label:_propTypes.string,dataField:_propTypes.string,sortBy:_propTypes.string})),sortByWithCount:(0,_propTypes.oneOf)(['asc','desc','count']),stats:(0,_propTypes.arrayOf)(_propTypes.object),string:_propTypes.string,stringArray:(0,_propTypes.arrayOf)(_propTypes.string),stringOrArray:(0,_propTypes.oneOfType)([_propTypes.string,(0,_propTypes.arrayOf)(_propTypes.string)]),stringRequired:_propTypes.string.isRequired,style:_propTypes.object,themePreset:(0,_propTypes.oneOf)(['light','dark']),queryFormatDate:(0,_propTypes.oneOf)(Object.keys(_dateFormats2.default)),queryFormatSearch:(0,_propTypes.oneOf)(['and','or']),queryFormatNumberBox:(0,_propTypes.oneOf)(['exact','lte','gte']),params:_propTypes.object.isRequired,props:_propTypes.object,rangeLabelsAlign:(0,_propTypes.oneOf)(['left','right']),title:(0,_propTypes.oneOfType)([_propTypes.string,_propTypes.any]),location:(0,_propTypes.shape)({lat:validateLocation,lng:validateLocation}),unit:(0,_propTypes.oneOf)(['mi','miles','yd','yards','ft','feet','in','inch','km','kilometers','m','meters','cm','centimeters','mm','millimeters','NM','nmi','nauticalmiles'])};exports.default=types;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/basic/ReactiveBase.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _appbaseJs = __webpack_require__("./node_modules/appbase-js/dist/appbase-js.es.js");

var _appbaseJs2 = _interopRequireDefault(_appbaseJs);

var _emotionTheming = __webpack_require__("./node_modules/emotion-theming/dist/index.esm.js");

var _reactivecore = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/index.js");

var _reactivecore2 = _interopRequireDefault(_reactivecore);

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _URLParamsProvider = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/basic/URLParamsProvider.js");

var _URLParamsProvider2 = _interopRequireDefault(_URLParamsProvider);

var _theme = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _utils = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable global-require */

var URLSearchParams = __webpack_require__("./node_modules/url-search-params/build/url-search-params.node.js");

/* use a custom store key so reactivesearch does not interfere
   with a different redux store in a nested context */
var Provider = (0, _reactRedux.createProvider)(_reactivecore.storeKey);

var ReactiveBase = function (_Component) {
	_inherits(ReactiveBase, _Component);

	function ReactiveBase(props) {
		_classCallCheck(this, ReactiveBase);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_initialiseProps.call(_this);

		_this.state = {
			key: '__REACTIVE_BASE__'
		};

		_this.setStore(props);
		return _this;
	}

	ReactiveBase.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		var _this2 = this;

		(0, _helper.checkSomePropChange)(this.props, nextProps, ['app', 'url', 'type', 'credentials', 'mapKey', 'headers'], function () {
			_this2.setStore(nextProps);
			_this2.setState(function (state) {
				return {
					key: state.key + '-0'
				};
			});
		});
	};

	ReactiveBase.prototype.componentDidCatch = function componentDidCatch() {
		console.error("An error has occured. You're using Reactivesearch Version:", (process.env.VERSION || __webpack_require__("./node_modules/@appbaseio/reactivesearch/package.json").version) + '.', 'If you think this is a problem with Reactivesearch, please try updating', "to the latest version. If you're already at the latest version, please open", 'an issue at https://github.com/appbaseio/reactivesearch/issues');
	};

	ReactiveBase.prototype.render = function render() {
		var theme = (0, _utils.composeThemeObject)((0, _theme2.default)(this.props.themePreset), this.props.theme);

		return _react2.default.createElement(
			_emotionTheming.ThemeProvider,
			{ theme: theme, key: this.state.key },
			_react2.default.createElement(
				Provider,
				{ store: this.store },
				_react2.default.createElement(
					_URLParamsProvider2.default,
					{
						headers: this.props.headers,
						style: this.props.style,
						className: this.props.className,
						getSearchParams: this.props.getSearchParams,
						setSearchParams: this.props.setSearchParams
					},
					this.props.children
				)
			)
		);
	};

	return ReactiveBase;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
	var _this3 = this;

	this.setStore = function (props) {
		_this3.type = props.type ? props.type : '*';

		var credentials = props.url && props.url.trim() !== '' && !props.credentials ? null : props.credentials;

		var config = {
			url: props.url && props.url.trim() !== '' ? props.url : 'https://scalr.api.appbase.io',
			app: props.app,
			credentials: credentials,
			type: _this3.type,
			transformRequest: props.transformRequest,
			analytics: props.analytics
		};

		var queryParams = '';
		if (typeof window !== 'undefined') {
			queryParams = props.getSearchParams ? props.getSearchParams() : window.location.search;
		} else {
			queryParams = props.queryParams || '';
		}

		var params = new URLSearchParams(queryParams);
		var selectedValues = {};

		try {
			Array.from(params.keys()).forEach(function (key) {
				var _extends2;

				var parsedParams = JSON.parse(params.get(key));
				var selectedValue = {};
				if (parsedParams.value) {
					selectedValue.value = parsedParams.value;
				} else {
					selectedValue.value = parsedParams;
				}
				if (parsedParams.category) selectedValue.category = parsedParams.category;
				selectedValues = _extends({}, selectedValues, (_extends2 = {}, _extends2[key] = selectedValue, _extends2));
			});
		} catch (e) {
			// Do not add to selectedValues if JSON parsing fails.
		}

		var _props$headers = props.headers,
		    headers = _props$headers === undefined ? {} : _props$headers,
		    themePreset = props.themePreset;

		var appbaseRef = (0, _appbaseJs2.default)(config);
		if (_this3.props.transformRequest) {
			appbaseRef.transformRequest = _this3.props.transformRequest;
		}

		var initialState = _extends({
			config: _extends({}, config, { mapKey: props.mapKey, themePreset: themePreset }),
			appbaseRef: appbaseRef,
			selectedValues: selectedValues,
			headers: headers
		}, _this3.props.initialState);
		_this3.store = (0, _reactivecore2.default)(initialState);
	};
};

ReactiveBase.defaultProps = {
	theme: {},
	themePreset: 'light',
	initialState: {},
	analytics: false
};

ReactiveBase.propTypes = {
	app: _types2.default.stringRequired,
	children: _types2.default.children,
	credentials: _types2.default.string,
	headers: _types2.default.headers,
	queryParams: _types2.default.string,
	theme: _types2.default.style,
	themePreset: _types2.default.themePreset,
	type: _types2.default.string,
	url: _types2.default.string,
	transformRequest: _types2.default.func,
	mapKey: _types2.default.string,
	style: _types2.default.style,
	className: _types2.default.string,
	initialState: _types2.default.children,
	analytics: _types2.default.bool,
	getSearchParams: _types2.default.func,
	setSearchParams: _types2.default.func
};

exports.default = ReactiveBase;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/basic/SelectedFilters.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _emotionTheming = __webpack_require__("./node_modules/emotion-theming/dist/index.esm.js");

var _actions = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/index.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _Button = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Container = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Title = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Title.js");

var _Title2 = _interopRequireDefault(_Title);

var _utils = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectedFilters = function (_Component) {
	_inherits(SelectedFilters, _Component);

	function SelectedFilters() {
		var _temp, _this, _ret;

		_classCallCheck(this, SelectedFilters);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.remove = function (component) {
			var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var onClear = _this.props.onClear;

			_this.props.setValue(component, null);
			if (onClear) {
				onClear(component, value);
			}
		}, _this.clearValues = function () {
			var onClear = _this.props.onClear;

			_this.props.clearValues();
			if (onClear) {
				onClear(null);
			}
		}, _this.renderValue = function (value, isArray) {
			if (isArray && value.length) {
				var arrayToRender = value.map(function (item) {
					return _this.renderValue(item);
				});
				return arrayToRender.join(', ');
			} else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
				// TODO: support for NestedList
				var label = (typeof value.label === 'string' ? value.label : value.value) || value.key || value.distance || null;
				if (value.location) {
					label = value.location + ' - ' + label;
				}
				return label;
			}
			return value;
		}, _this.renderFilters = function () {
			var selectedValues = _this.props.selectedValues;

			return Object.keys(selectedValues).filter(function (id) {
				return _this.props.components.includes(id) && selectedValues[id].showFilter;
			}).map(function (component, index) {
				var _selectedValues$compo = selectedValues[component],
				    label = _selectedValues$compo.label,
				    value = _selectedValues$compo.value,
				    category = _selectedValues$compo.category;

				var isArray = Array.isArray(value);

				if (label && (isArray && value.length || !isArray && value)) {
					var valueToRender = category ? _this.renderValue(value + ' in ' + category + ' category', isArray) : _this.renderValue(value, isArray);
					return _react2.default.createElement(
						_Button2.default,
						{
							className: (0, _helper.getClassName)(_this.props.innerClass, 'button') || null,
							key: component + '-' + (index + 1),
							onClick: function onClick() {
								return _this.remove(component, value);
							}
						},
						_react2.default.createElement(
							'span',
							null,
							selectedValues[component].label,
							': ',
							valueToRender
						),
						_react2.default.createElement(
							'span',
							null,
							'\u2715'
						)
					);
				}
				return null;
			}).filter(Boolean);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	SelectedFilters.prototype.render = function render() {
		if (this.props.render) {
			return this.props.render(this.props);
		}

		var theme = this.props.theme;

		var filtersToRender = this.renderFilters();
		var hasValues = !!filtersToRender.length;

		return _react2.default.createElement(
			_Container2.default,
			{
				style: this.props.style,
				className: (0, _Button.filters)(theme) + ' ' + (this.props.className || '')
			},
			this.props.title && hasValues && _react2.default.createElement(
				_Title2.default,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'title') || null },
				this.props.title
			),
			filtersToRender,
			this.props.showClearAll && hasValues ? _react2.default.createElement(
				_Button2.default,
				{
					className: (0, _helper.getClassName)(this.props.innerClass, 'button') || null,
					onClick: this.clearValues
				},
				this.props.clearAllLabel
			) : null
		);
	};

	return SelectedFilters;
}(_react.Component);

SelectedFilters.propTypes = {
	clearValues: _types2.default.func,
	setValue: _types2.default.func,
	components: _types2.default.components,
	selectedValues: _types2.default.selectedValues,
	className: _types2.default.string,
	clearAllLabel: _types2.default.title,
	innerClass: _types2.default.style,
	showClearAll: _types2.default.bool,
	style: _types2.default.style,
	theme: _types2.default.style,
	onClear: _types2.default.func,
	render: _types2.default.func,
	title: _types2.default.title
};

SelectedFilters.defaultProps = {
	className: null,
	clearAllLabel: 'Clear All',
	showClearAll: true,
	style: {}
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		components: state.components,
		selectedValues: state.selectedValues
	};
};

var mapDispatchtoProps = function mapDispatchtoProps(dispatch) {
	return {
		clearValues: function clearValues() {
			return dispatch((0, _actions.clearValues)());
		},
		setValue: function setValue(component, value) {
			return dispatch((0, _actions.setValue)(component, value));
		}
	};
};

exports.default = (0, _utils.connect)(mapStateToProps, mapDispatchtoProps)((0, _emotionTheming.withTheme)(SelectedFilters));

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/basic/URLParamsProvider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/index.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _Base = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Base.js");

var _Base2 = _interopRequireDefault(_Base);

var _utils = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var URLSearchParams = __webpack_require__("./node_modules/url-search-params/build/url-search-params.node.js");

var URLParamsProvider = function (_Component) {
	_inherits(URLParamsProvider, _Component);

	function URLParamsProvider() {
		_classCallCheck(this, URLParamsProvider);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	URLParamsProvider.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		var searchParams = this.props.getSearchParams ? this.props.getSearchParams() : window.location.search;
		this.params = new URLSearchParams(searchParams);
		this.currentSelectedState = this.props.selectedValues || {};
		window.onpopstate = function () {
			var activeComponents = Array.from(_this2.params.keys());

			// remove inactive components from selectedValues
			Object.keys(_this2.currentSelectedState).filter(function (item) {
				return !activeComponents.includes(item);
			}).forEach(function (component) {
				_this2.props.setValue(component, null);
			});

			// update active components in selectedValues
			Array.from(_this2.params.entries()).forEach(function (item) {
				try {
					_this2.props.setValue(item[0], JSON.parse(item[1]));
				} catch (e) {
					// Do not set value if JSON parsing fails.
				}
			});
		};
	};

	URLParamsProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		var _this3 = this;

		this.currentSelectedState = nextProps.selectedValues;
		if (!(0, _helper.isEqual)(this.props.selectedValues, nextProps.selectedValues)) {
			var searchParams = this.props.getSearchParams ? this.props.getSearchParams() : window.location.search;
			this.params = new URLSearchParams(searchParams);
			var currentComponents = Object.keys(nextProps.selectedValues);
			var urlComponents = Array.from(this.params.keys());

			currentComponents.filter(function (component) {
				return nextProps.selectedValues[component].URLParams;
			}).forEach(function (component) {
				// prevents empty history pollution on initial load
				if (_this3.hasValidValue(_this3.props.selectedValues[component]) || _this3.hasValidValue(nextProps.selectedValues[component])) {
					var selectedValues = nextProps.selectedValues[component];
					if (selectedValues.URLParams) {
						if (selectedValues.category) {
							_this3.setURL(component, _this3.getValue({
								category: selectedValues.category,
								value: selectedValues.value
							}));
						} else {
							_this3.setURL(component, _this3.getValue(selectedValues.value));
						}
					} else {
						_this3.params.delete(component);
						_this3.pushToHistory();
					}
				} else if (!_this3.hasValidValue(nextProps.selectedValues[component]) && urlComponents.includes(component)) {
					// doesn't have a valid value, but the url has a (stale) valid value set
					_this3.params.delete(component);
					_this3.pushToHistory();
				}
			});

			// remove unmounted components
			Object.keys(this.props.selectedValues).filter(function (component) {
				return !currentComponents.includes(component);
			}).forEach(function (component) {
				_this3.params.delete(component);
				_this3.pushToHistory();
			});

			if (!currentComponents.length) {
				Array.from(this.params.keys()).forEach(function (item) {
					_this3.params.delete(item);
				});
				this.pushToHistory();
			}
		}

		if (!(0, _helper.isEqual)(this.props.headers, nextProps.headers)) {
			nextProps.setHeaders(nextProps.headers);
		}
	};

	URLParamsProvider.prototype.hasValidValue = function hasValidValue(component) {
		if (!component) return false;
		if (Array.isArray(component.value)) return !!component.value.length;
		return !!component.value;
	};

	URLParamsProvider.prototype.getValue = function getValue(value) {
		var _this4 = this;

		if (Array.isArray(value) && value.length) {
			return value.map(function (item) {
				return _this4.getValue(item);
			});
		} else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
			// TODO: support for NestedList
			if (value.location) return value;
			if (value.category) return value;
			return value.label || value.key || null;
		}
		return value;
	};

	URLParamsProvider.prototype.setURL = function setURL(component, value) {
		var searchParams = this.props.getSearchParams ? this.props.getSearchParams() : window.location.search;
		this.params = new URLSearchParams(searchParams);
		if (!value || typeof value === 'string' && value.trim() === '' || Array.isArray(value) && value.length === 0) {
			this.params.delete(component);
			this.pushToHistory();
		} else {
			var data = JSON.stringify(this.getValue(value));
			if (data !== this.params.get(component)) {
				this.params.set(component, data);
				this.pushToHistory();
			}
		}
	};

	URLParamsProvider.prototype.pushToHistory = function pushToHistory() {
		var paramsSting = this.params.toString() ? '?' + this.params.toString() : '';
		var base = window.location.href.split('?')[0];
		var newURL = '' + base + paramsSting;
		if (this.props.setSearchParams) {
			this.props.setSearchParams(newURL);
		} else if (window.history.pushState) {
			window.history.pushState({ path: newURL }, '', newURL);
		}
	};

	URLParamsProvider.prototype.render = function render() {
		return _react2.default.createElement(
			_Base2.default,
			{ style: this.props.style, className: this.props.className },
			this.props.children
		);
	};

	return URLParamsProvider;
}(_react.Component);

URLParamsProvider.propTypes = {
	setHeaders: _types2.default.func,
	setValue: _types2.default.func,
	selectedValues: _types2.default.selectedValues,
	// component props
	children: _types2.default.children,
	headers: _types2.default.headers,
	style: _types2.default.style,
	className: _types2.default.string,
	getSearchParams: _types2.default.func,
	setSearchParams: _types2.default.func
};

URLParamsProvider.defaultProps = {
	style: {},
	className: null
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		selectedValues: state.selectedValues
	};
};

var mapDispatchtoProps = function mapDispatchtoProps(dispatch) {
	return {
		setHeaders: function setHeaders(headers) {
			return dispatch((0, _actions.setHeaders)(headers));
		},
		setValue: function setValue(component, value, label, showFilter, URLParams) {
			return dispatch((0, _actions.setValue)(component, value, label, showFilter, URLParams));
		}
	};
};

exports.default = (0, _utils.connect)(mapStateToProps, mapDispatchtoProps)(URLParamsProvider);

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/date/DateRange.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/index.js");

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _xdate = __webpack_require__("./node_modules/xdate/src/xdate.js");

var _xdate2 = _interopRequireDefault(_xdate);

var _DayPickerInput = __webpack_require__("./node_modules/react-day-picker/DayPickerInput.js");

var _DayPickerInput2 = _interopRequireDefault(_DayPickerInput);

var _emotionTheming = __webpack_require__("./node_modules/emotion-theming/dist/index.esm.js");

var _DateContainer = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/DateContainer.js");

var _DateContainer2 = _interopRequireDefault(_DateContainer);

var _Title = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Title.js");

var _Title2 = _interopRequireDefault(_Title);

var _Flex = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Flex.js");

var _Flex2 = _interopRequireDefault(_Flex);

var _utils = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/utils/index.js");

var _CancelSvg = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/shared/CancelSvg.js");

var _CancelSvg2 = _interopRequireDefault(_CancelSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateRange = function (_Component) {
	_inherits(DateRange, _Component);

	function DateRange(props) {
		_classCallCheck(this, DateRange);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_initialiseProps.call(_this);

		_this.state = {
			currentDate: null,
			dateHovered: null
		};
		_this.locked = false;
		props.setQueryListener(props.componentId, props.onQueryChange, null);
		return _this;
	}

	DateRange.prototype.componentWillMount = function componentWillMount() {
		this.props.addComponent(this.props.componentId);
		this.setReact(this.props);

		if (this.props.selectedValue) {
			// parsing string values from selectedValue to date objects for DayPicker
			// for value as an array from URL
			if (Array.isArray(this.props.selectedValue)) {
				this.handleDateChange({
					start: new Date(this.props.selectedValue[0]),
					end: new Date(this.props.selectedValue[1])
				}, false);
			} else {
				// for value as an object for SSR
				var _props$selectedValue = this.props.selectedValue,
				    start = _props$selectedValue.start,
				    end = _props$selectedValue.end;

				this.handleDateChange({
					start: new Date(start),
					end: new Date(end)
				}, false);
			}
		} else if (this.props.defaultSelected) {
			this.handleDateChange(this.props.defaultSelected, false);
		}
	};

	DateRange.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		var _this2 = this;

		(0, _helper.checkPropChange)(this.props.react, nextProps.react, function () {
			return _this2.setReact(nextProps);
		});
		if (!(0, _helper.isEqual)(this.props.defaultSelected, nextProps.defaultSelected)) {
			this.handleDateChange(nextProps.defaultSelected, false, nextProps);
		} else {
			var currentDate = this.state.currentDate;
			var selectedValue = nextProps.selectedValue;
			// comparing array format of selectedValue with object form of the state if not null

			if (!(0, _helper.isEqual)(currentDate ? [this.formatInputDate(currentDate.start), this.formatInputDate(currentDate.end)] // prettier-ignore
			: null, selectedValue) && !(0, _helper.isEqual)(this.props.selectedValue, selectedValue)) {
				this.handleDateChange(selectedValue ? {
					start: nextProps.selectedValue[0],
					end: nextProps.selectedValue[1] // prettier-ignore
				} : null, true, nextProps);
			}
		}
		(0, _helper.checkSomePropChange)(this.props, nextProps, ['dataField', 'nestedField'], function () {
			return _this2.updateQuery(_this2.state.currentDate ? {
				// we need the date in correct queryFormat
				start: (0, _helper.formatDate)(_this2.state.currentDate.start),
				end: (0, _helper.formatDate)(_this2.state.currentDate.end) // prettier-ignore
			} : _this2.state.currentDate, nextProps);
		});
	};

	DateRange.prototype.componentWillUnmount = function componentWillUnmount() {
		this.props.removeComponent(this.props.componentId);
	};

	DateRange.prototype.setReact = function setReact(props) {
		if (props.react) {
			props.watchComponent(props.componentId, props.react);
		}
	};

	DateRange.prototype.render = function render() {
		var _state = this.state,
		    currentDate = _state.currentDate,
		    dateHovered = _state.dateHovered;

		var start = currentDate ? currentDate.start : '';
		var end = currentDate ? currentDate.end : '';
		var endDay = dateHovered || '';
		var selectedDays = [start, { from: start, to: endDay }];
		var modifiers = { start: start, end: endDay };
		return _react2.default.createElement(
			_DateContainer2.default,
			{
				range: true,
				style: this.props.style,
				className: this.props.className,
				showBorder: !this.props.showClear
			},
			this.props.title && _react2.default.createElement(
				_Title2.default,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'title') || null },
				this.props.title
			),
			_react2.default.createElement(
				_Flex2.default,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'input-container') || null },
				_react2.default.createElement(
					_Flex2.default,
					{
						flex: 2,
						showBorder: this.props.showClear,
						iconPosition: 'right',
						style: {
							background: this.props.theme.colors.backgroundColor || 'transparent'
						}
					},
					_react2.default.createElement(_DayPickerInput2.default, _extends({
						ref: this.getStartDateRef,
						showOverlay: this.props.focused,
						formatDate: this.formatInputDate,
						value: start,
						placeholder: this.props.placeholder.start,
						dayPickerProps: {
							numberOfMonths: this.props.numberOfMonths,
							initialMonth: this.props.initialMonth,
							disabledDays: {
								after: this.state.currentDate ? this.state.currentDate.end : ''
							},
							selectedDays: selectedDays,
							modifiers: modifiers
						},
						onDayChange: this.handleStartDate,
						classNames: {
							container: (0, _helper.getClassName)(this.props.innerClass, 'daypicker-container') || 'DayPickerInput',
							overlayWrapper: (0, _helper.getClassName)(this.props.innerClass, 'daypicker-overlay-wrapper') || 'DayPickerInput-OverlayWrapper',
							overlay: (0, _helper.getClassName)(this.props.innerClass, 'daypicker-overlay') || 'DayPickerInput-Overlay'
						}
					}, this.props.dayPickerInputProps)),
					this.props.showClear && this.state.currentDate && this.state.currentDate.start && _react2.default.createElement(_CancelSvg2.default, { onClick: this.clearDayPickerStart })
				),
				_react2.default.createElement(
					_Flex2.default,
					{ justifyContent: 'center', alignItems: 'center', basis: '20px' },
					'-'
				),
				_react2.default.createElement(
					_Flex2.default,
					{
						flex: 2,
						showBorder: this.props.showClear,
						iconPosition: 'right',
						style: {
							background: this.props.theme.colors.backgroundColor || 'transparent'
						}
					},
					_react2.default.createElement(_DayPickerInput2.default, _extends({
						ref: this.getEndDateRef,
						showOverlay: this.props.focused,
						formatDate: this.formatInputDate,
						value: end,
						placeholder: this.props.placeholder.end,
						dayPickerProps: {
							numberOfMonths: this.props.numberOfMonths,
							initialMonth: this.props.initialMonth,
							onDayMouseEnter: this.handleDayMouseEnter,
							disabledDays: {
								before: this.state.currentDate ? this.state.currentDate.start : ''
							},
							selectedDays: selectedDays,
							modifiers: modifiers
						},
						onDayChange: this.handleEndDate,
						classNames: {
							container: (0, _helper.getClassName)(this.props.innerClass, 'daypicker-container') || 'DayPickerInput',
							overlayWrapper: (0, _helper.getClassName)(this.props.innerClass, 'daypicker-overlay-wrapper') || 'DayPickerInput-OverlayWrapper',
							overlay: (0, _helper.getClassName)(this.props.innerClass, 'daypicker-overlay') || 'DayPickerInput-Overlay'
						}
					}, this.props.dayPickerInputProps)),
					this.props.showClear && this.state.currentDate && this.state.currentDate.end && _react2.default.createElement(_CancelSvg2.default, { onClick: this.clearDayPickerEnd })
				)
			)
		);
	};

	return DateRange;
}(_react.Component);

DateRange.defaultQuery = function (value, props) {
	var query = null;
	if (value) {
		if (Array.isArray(props.dataField) && props.dataField.length === 2) {
			var _range, _range2;

			query = {
				bool: {
					must: [{
						range: (_range = {}, _range[props.dataField[0]] = {
							lte: (0, _helper.formatDate)(new _xdate2.default(value.start), props)
						}, _range)
					}, {
						range: (_range2 = {}, _range2[props.dataField[1]] = {
							gte: (0, _helper.formatDate)(new _xdate2.default(value.end), props)
						}, _range2)
					}]
				}
			};
		} else if (Array.isArray(props.dataField)) {
			var _range3;

			query = {
				range: (_range3 = {}, _range3[props.dataField[0]] = {
					gte: (0, _helper.formatDate)(new _xdate2.default(value.start), props),
					lte: (0, _helper.formatDate)(new _xdate2.default(value.end), props)
				}, _range3)
			};
		} else {
			var _range4;

			query = {
				range: (_range4 = {}, _range4[props.dataField] = {
					gte: (0, _helper.formatDate)(new _xdate2.default(value.start), props),
					lte: (0, _helper.formatDate)(new _xdate2.default(value.end), props)
				}, _range4)
			};
		}
	}

	if (query && props.nestedField) {
		return {
			query: {
				nested: {
					path: props.nestedField,
					query: query
				}
			}
		};
	}

	return query;
};

var _initialiseProps = function _initialiseProps() {
	var _this3 = this;

	this.formatInputDate = function (date) {
		var xdate = new _xdate2.default(date);
		return xdate.valid() ? xdate.toString('yyyy-MM-dd') : '';
	};

	this.getEndDateRef = function (ref) {
		_this3.endDateRef = ref;
	};

	this.getStartDateRef = function (ref) {
		_this3.startDateRef = ref;
	};

	this.clearDayPickerStart = function () {
		if (_this3.state.currentDate && _this3.state.currentDate.start !== '') {
			_this3.handleStartDate('', false); // resets the day picker component
		}
	};

	this.clearDayPickerEnd = function () {
		if (_this3.state.currentDate && _this3.state.currentDate.end !== '') {
			_this3.handleEndDate(''); // resets the day picker component
		}
	};

	this.handleStartDate = function (date) {
		var autoFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
		var currentDate = _this3.state.currentDate;

		var end = currentDate ? currentDate.end : '';
		if (_this3.startDateRef.getInput().value.length === 10) {
			_this3.handleDateChange({
				start: date,
				end: end
			});
			// focus the end date DayPicker if its empty
			if (_this3.props.autoFocusEnd && autoFocus) {
				_this3.endDateRef.getInput().focus();
			}
		}
	};

	this.handleEndDate = function (selectedDay) {
		var currentDate = _this3.state.currentDate;

		if (_this3.endDateRef.getInput().value.length === 10) {
			_this3.handleDayMouseEnter(selectedDay);
			_this3.handleDateChange({
				start: currentDate ? currentDate.start : '',
				end: selectedDay
			});
		}
	};

	this.handleDayMouseEnter = function (day) {
		_this3.setState({
			dateHovered: day
		});
	};

	this.handleDateChange = function (currentDate) {
		var isDefaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this3.props;

		// ignore state updates when component is locked
		if (props.beforeValueChange && _this3.locked) {
			return;
		}

		_this3.locked = true;
		var value = null;
		if (currentDate && !(currentDate.start === '' && currentDate.end === '')) {
			value = isDefaultValue ? currentDate : {
				start: _this3.formatInputDate(currentDate.start),
				end: _this3.formatInputDate(currentDate.end)
			}; // prettier-ignore
		}

		var performUpdate = function performUpdate() {
			_this3.setState({
				currentDate: currentDate
			}, function () {
				_this3.updateQuery(value, props);
				_this3.locked = false;
				if (props.onValueChange) props.onValueChange(value);
			});
		};
		(0, _helper.checkValueChange)(props.componentId, value, props.beforeValueChange, performUpdate);
	};

	this.updateQuery = function (value, props) {
		if (!value || value && value.start.length && value.end.length) {
			var query = props.customQuery || DateRange.defaultQuery;

			props.updateQuery({
				componentId: props.componentId,
				query: query(value, props),
				value: value ? [value.start, value.end] : null,
				showFilter: props.showFilter,
				label: props.filterLabel,
				URLParams: props.URLParams,
				componentType: 'DATERANGE'
			});
		}
	};
};

DateRange.propTypes = {
	addComponent: _types2.default.funcRequired,
	removeComponent: _types2.default.funcRequired,
	setQueryListener: _types2.default.funcRequired,
	updateQuery: _types2.default.funcRequired,
	watchComponent: _types2.default.funcRequired,
	selectedValue: _types2.default.selectedValue,
	// component props
	autoFocusEnd: _types2.default.bool,
	className: _types2.default.string,
	componentId: _types2.default.stringRequired,
	dataField: _types2.default.dataFieldArray,
	dayPickerInputProps: _types2.default.props,
	defaultSelected: _types2.default.dateObject,
	filterLabel: _types2.default.string,
	focused: _types2.default.bool,
	initialMonth: _types2.default.dateObject,
	innerClass: _types2.default.style,
	nestedField: _types2.default.string,
	numberOfMonths: _types2.default.number,
	onQueryChange: _types2.default.func,
	parseDate: _types2.default.func,
	placeholder: _types2.default.rangeLabels,
	queryFormat: _types2.default.queryFormatDate,
	react: _types2.default.react,
	showClear: _types2.default.bool,
	showFilter: _types2.default.bool,
	style: _types2.default.style,
	theme: _types2.default.style,
	title: _types2.default.string
};

DateRange.defaultProps = {
	autoFocusEnd: true,
	numberOfMonths: 2,
	placeholder: {
		start: 'Start date',
		end: 'End date'
	},
	showClear: true,
	showFilter: true
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		selectedValue: state.selectedValues[props.componentId] ? state.selectedValues[props.componentId].value : null
	};
};

var mapDispatchtoProps = function mapDispatchtoProps(dispatch) {
	return {
		addComponent: function addComponent(component) {
			return dispatch((0, _actions.addComponent)(component));
		},
		removeComponent: function removeComponent(component) {
			return dispatch((0, _actions.removeComponent)(component));
		},
		updateQuery: function updateQuery(updateQueryObject) {
			return dispatch((0, _actions.updateQuery)(updateQueryObject));
		},
		watchComponent: function watchComponent(component, react) {
			return dispatch((0, _actions.watchComponent)(component, react));
		},
		setQueryListener: function setQueryListener(component, onQueryChange, beforeQueryChange) {
			return dispatch((0, _actions.setQueryListener)(component, onQueryChange, beforeQueryChange));
		}
	};
};

exports.default = (0, _utils.connect)(mapStateToProps, mapDispatchtoProps)((0, _emotionTheming.withTheme)(DateRange));

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/list/MultiDataList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/index.js");

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _Title = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Title.js");

var _Title2 = _interopRequireDefault(_Title);

var _Input = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _Container = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _FormControlList = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/FormControlList.js");

var _utils = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/utils/index.js");

var _utils2 = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/list/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiDataList = function (_Component) {
	_inherits(MultiDataList, _Component);

	function MultiDataList(props) {
		_classCallCheck(this, MultiDataList);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_initialiseProps.call(_this);

		_this.state = {
			currentValue: {},
			searchTerm: '',
			options: props.data || []
		};
		_this.internalComponent = props.componentId + '__internal';
		_this.type = 'term';
		_this.locked = false;
		props.setQueryListener(props.componentId, props.onQueryChange, null);
		return _this;
	}

	MultiDataList.prototype.componentWillMount = function componentWillMount() {
		this.props.addComponent(this.internalComponent);
		this.props.addComponent(this.props.componentId);

		if (this.props.showCount) {
			this.updateQueryOptions(this.props);
		}

		this.setReact(this.props);

		if (this.props.selectedValue.length) {
			this.setValue(this.props.selectedValue, true);
		} else if (this.props.defaultSelected) {
			this.setValue(this.props.defaultSelected, true);
		}
	};

	MultiDataList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		var _this2 = this;

		(0, _helper.checkPropChange)(this.props.react, nextProps.react, function () {
			return _this2.setReact(nextProps);
		});

		(0, _helper.checkSomePropChange)(this.props, nextProps, ['dataField', 'nestedField'], function () {
			_this2.updateQuery(Object.keys(_this2.state.currentValue), nextProps);

			if (nextProps.showCount) {
				_this2.updateQueryOptions(nextProps);
			}
		});

		(0, _helper.checkPropChange)(this.props.data, nextProps.data, function () {
			if (nextProps.showCount) {
				_this2.updateQueryOptions(nextProps);
			}
		});

		(0, _helper.checkPropChange)(this.props.options, nextProps.options, function () {
			_this2.updateStateOptions(nextProps.options[nextProps.dataField].buckets);
		});

		var selectedValue = Object.keys(this.state.currentValue);

		if (this.props.selectAllLabel) {
			selectedValue = selectedValue.filter(function (val) {
				return val !== _this2.props.selectAllLabel;
			});

			if (this.state.currentValue[this.props.selectAllLabel]) {
				selectedValue = [this.props.selectAllLabel];
			}
		}

		if (!(0, _helper.isEqual)(this.props.defaultSelected, nextProps.defaultSelected)) {
			this.setValue(nextProps.defaultSelected, true);
		} else if (!(0, _helper.isEqual)(selectedValue, nextProps.selectedValue)) {
			this.setValue(nextProps.selectedValue, true);
		}
	};

	MultiDataList.prototype.componentWillUnmount = function componentWillUnmount() {
		this.props.removeComponent(this.props.componentId);
		this.props.removeComponent(this.internalComponent);
	};

	MultiDataList.prototype.setReact = function setReact(props) {
		var react = this.props.react;


		if (react) {
			var newReact = (0, _helper.pushToAndClause)(react, this.internalComponent);
			props.watchComponent(props.componentId, newReact);
		} else {
			props.watchComponent(props.componentId, {
				and: this.internalComponent
			});
		}
	};

	MultiDataList.generateQueryOptions = function generateQueryOptions(props, state) {
		var queryOptions = (0, _helper.getQueryOptions)(props);
		var includes = state.options.map(function (item) {
			return item.value;
		});
		return (0, _utils2.getAggsQuery)(queryOptions, props, includes);
	};

	MultiDataList.prototype.render = function render() {
		var _this3 = this;

		var _props = this.props,
		    selectAllLabel = _props.selectAllLabel,
		    showCount = _props.showCount,
		    renderListItem = _props.renderListItem;
		var options = this.state.options;


		if (options.length === 0) {
			return null;
		}

		return _react2.default.createElement(
			_Container2.default,
			{ style: this.props.style, className: this.props.className },
			this.props.title && _react2.default.createElement(
				_Title2.default,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'title') || null },
				this.props.title
			),
			this.renderSearch(),
			_react2.default.createElement(
				_FormControlList.UL,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'list') || null },
				selectAllLabel ? _react2.default.createElement(
					'li',
					{
						key: selectAllLabel,
						className: '' + (this.state.currentValue[selectAllLabel] ? 'active' : '')
					},
					_react2.default.createElement(_FormControlList.Checkbox, {
						className: (0, _helper.getClassName)(this.props.innerClass, 'checkbox') || null,
						id: this.props.componentId + '-' + selectAllLabel,
						name: selectAllLabel,
						value: selectAllLabel,
						onChange: this.handleClick,
						checked: !!this.state.currentValue[selectAllLabel],
						show: this.props.showCheckbox
					}),
					_react2.default.createElement(
						'label',
						{
							className: (0, _helper.getClassName)(this.props.innerClass, 'label') || null,
							htmlFor: this.props.componentId + '-' + selectAllLabel
						},
						selectAllLabel
					)
				) : null,
				options.filter(function (item) {
					if (_this3.props.showSearch && _this3.state.searchTerm) {
						return item.label.toLowerCase().includes(_this3.state.searchTerm.toLowerCase());
					}
					return true;
				}).map(function (item) {
					return _react2.default.createElement(
						'li',
						{
							key: item.label,
							className: '' + (_this3.state.currentValue[item.label] ? 'active' : '')
						},
						_react2.default.createElement(_FormControlList.Checkbox, {
							className: (0, _helper.getClassName)(_this3.props.innerClass, 'checkbox') || null,
							id: _this3.props.componentId + '-' + item.label,
							name: _this3.props.componentId,
							value: item.label,
							onChange: _this3.handleClick,
							checked: !!_this3.state.currentValue[item.label],
							show: _this3.props.showCheckbox
						}),
						_react2.default.createElement(
							'label',
							{
								className: (0, _helper.getClassName)(_this3.props.innerClass, 'label') || null,
								htmlFor: _this3.props.componentId + '-' + item.label
							},
							renderListItem ? renderListItem(item.label, item.count) : _react2.default.createElement(
								'span',
								null,
								item.label,
								showCount && item.count && _react2.default.createElement(
									'span',
									{
										className: (0, _helper.getClassName)(_this3.props.innerClass, 'count') || null
									},
									'\xA0(',
									item.count,
									')'
								)
							)
						)
					);
				})
			)
		);
	};

	return MultiDataList;
}(_react.Component);

MultiDataList.defaultQuery = function (value, props) {
	var query = null;
	var type = props.queryFormat === 'or' ? 'terms' : 'term';
	if (props.selectAllLabel && Array.isArray(value) && value.includes(props.selectAllLabel)) {
		query = {
			exists: {
				field: props.dataField
			}
		};
	} else if (value) {
		var listQuery = void 0;
		if (props.queryFormat === 'or') {
			var _type, _listQuery;

			listQuery = (_listQuery = {}, _listQuery[type] = (_type = {}, _type[props.dataField] = value, _type), _listQuery);
		} else {
			// adds a sub-query with must as an array of objects for each term/value
			var queryArray = value.map(function (item) {
				var _type2, _ref;

				return _ref = {}, _ref[type] = (_type2 = {}, _type2[props.dataField] = item, _type2), _ref;
			});
			listQuery = {
				bool: {
					must: queryArray
				}
			};
		}

		query = value.length ? listQuery : null;
	}

	if (query && props.nestedField) {
		return {
			query: {
				nested: {
					path: props.nestedField,
					query: query
				}
			}
		};
	}

	return query;
};

var _initialiseProps = function _initialiseProps() {
	var _this4 = this;

	this.setValue = function (value) {
		var isDefaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this4.props;

		// ignore state updates when component is locked
		if (props.beforeValueChange && _this4.locked) {
			return;
		}

		_this4.locked = true;
		var selectAllLabel = _this4.props.selectAllLabel;
		var currentValue = _this4.state.currentValue;

		var finalValues = null;

		if (selectAllLabel && (Array.isArray(value) && value.includes(selectAllLabel) || typeof value === 'string' && value === selectAllLabel)) {
			if (currentValue[selectAllLabel]) {
				currentValue = {};
				finalValues = [];
			} else {
				props.data.forEach(function (item) {
					currentValue[item.label] = true;
				});
				currentValue[selectAllLabel] = true;
				finalValues = [selectAllLabel];
			}
		} else if (isDefaultValue) {
			finalValues = value;
			currentValue = {};
			if (value) {
				value.forEach(function (item) {
					currentValue[item] = true;
				});
			}

			if (selectAllLabel && selectAllLabel in currentValue) {
				var _currentValue = currentValue,
				    del = _currentValue[selectAllLabel],
				    obj = _objectWithoutProperties(_currentValue, [selectAllLabel]);

				currentValue = _extends({}, obj);
			}
		} else {
			if (currentValue[value]) {
				var _currentValue2 = currentValue,
				    _del = _currentValue2[value],
				    rest = _objectWithoutProperties(_currentValue2, [value]);

				currentValue = _extends({}, rest);
			} else {
				currentValue[value] = true;
			}

			if (selectAllLabel && selectAllLabel in currentValue) {
				var _currentValue3 = currentValue,
				    _del2 = _currentValue3[selectAllLabel],
				    _obj = _objectWithoutProperties(_currentValue3, [selectAllLabel]);

				currentValue = _extends({}, _obj);
			}
			finalValues = Object.keys(currentValue);
		}

		var performUpdate = function performUpdate() {
			_this4.setState({
				currentValue: currentValue
			}, function () {
				_this4.updateQuery(finalValues, props);
				_this4.locked = false;
				if (props.onValueChange) props.onValueChange(finalValues);
			});
		};

		(0, _helper.checkValueChange)(props.componentId, finalValues, props.beforeValueChange, performUpdate);
	};

	this.updateQuery = function (value, props) {
		var query = props.customQuery || MultiDataList.defaultQuery;

		// find the corresponding value of the label for running the query
		var queryValue = value.reduce(function (acc, item) {
			if (item === props.selectAllLabel) {
				return acc.concat(item);
			}
			var matchingItem = props.data.find(function (dataItem) {
				return dataItem.label === item;
			});
			return matchingItem ? acc.concat(matchingItem.value) : acc;
		}, []);

		props.updateQuery({
			componentId: props.componentId,
			query: query(queryValue, props),
			value: value,
			label: props.filterLabel,
			showFilter: props.showFilter,
			URLParams: props.URLParams,
			componentType: 'MULTIDATALIST'
		});
	};

	this.updateQueryOptions = function (props) {
		var queryOptions = MultiDataList.generateQueryOptions(props, _this4.state);
		props.setQueryOptions(_this4.internalComponent, queryOptions);
	};

	this.updateStateOptions = function (bucket) {
		if (bucket) {
			var bucketDictionary = bucket.reduce(function (obj, item) {
				var _extends2;

				return _extends({}, obj, (_extends2 = {}, _extends2[item.key] = item.doc_count, _extends2));
			}, {});

			var options = _this4.state.options;

			var newOptions = options.map(function (item) {
				if (bucketDictionary[item.value]) {
					return _extends({}, item, {
						count: bucketDictionary[item.value]
					});
				}

				return item;
			});

			_this4.setState({
				options: newOptions
			});
		}
	};

	this.handleInputChange = function (e) {
		var value = e.target.value;

		_this4.setState({
			searchTerm: value
		});
	};

	this.renderSearch = function () {
		if (_this4.props.showSearch) {
			return _react2.default.createElement(_Input2.default, {
				className: (0, _helper.getClassName)(_this4.props.innerClass, 'input') || null,
				onChange: _this4.handleInputChange,
				value: _this4.state.searchTerm,
				placeholder: _this4.props.placeholder,
				style: {
					margin: '0 0 8px'
				},
				themePreset: _this4.props.themePreset
			});
		}
		return null;
	};

	this.handleClick = function (e) {
		_this4.setValue(e.target.value);
	};
};

MultiDataList.propTypes = {
	addComponent: _types2.default.funcRequired,
	removeComponent: _types2.default.funcRequired,
	setQueryListener: _types2.default.funcRequired,
	setQueryOptions: _types2.default.funcRequired,
	updateQuery: _types2.default.funcRequired,
	watchComponent: _types2.default.funcRequired,
	selectedValue: _types2.default.selectedValue,
	options: _types2.default.options,
	// component props
	beforeValueChange: _types2.default.func,
	className: _types2.default.string,
	componentId: _types2.default.stringRequired,
	customQuery: _types2.default.func,
	data: _types2.default.data,
	dataField: _types2.default.stringRequired,
	defaultSelected: _types2.default.stringArray,
	filterLabel: _types2.default.string,
	innerClass: _types2.default.style,
	nestedField: _types2.default.string,
	onQueryChange: _types2.default.func,
	onValueChange: _types2.default.func,
	placeholder: _types2.default.string,
	queryFormat: _types2.default.queryFormatSearch,
	react: _types2.default.react,
	selectAllLabel: _types2.default.string,
	showCheckbox: _types2.default.boolRequired,
	showFilter: _types2.default.bool,
	showSearch: _types2.default.bool,
	style: _types2.default.style,
	themePreset: _types2.default.themePreset,
	title: _types2.default.title,
	URLParams: _types2.default.bool,
	showCount: _types2.default.bool,
	renderListItem: _types2.default.func
};

MultiDataList.defaultProps = {
	className: null,
	placeholder: 'Search',
	queryFormat: 'or',
	showCheckbox: true,
	showFilter: true,
	showSearch: true,
	style: {},
	URLParams: false,
	showCount: false
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || [],
		themePreset: state.config.themePreset,
		options: props.nestedField && state.aggregations[props.componentId] ? state.aggregations[props.componentId].reactivesearch_nested : state.aggregations[props.componentId]
	};
};

var mapDispatchtoProps = function mapDispatchtoProps(dispatch) {
	return {
		addComponent: function addComponent(component) {
			return dispatch((0, _actions.addComponent)(component));
		},
		removeComponent: function removeComponent(component) {
			return dispatch((0, _actions.removeComponent)(component));
		},
		updateQuery: function updateQuery(updateQueryObject) {
			return dispatch((0, _actions.updateQuery)(updateQueryObject));
		},
		watchComponent: function watchComponent(component, react) {
			return dispatch((0, _actions.watchComponent)(component, react));
		},
		setQueryListener: function setQueryListener(component, onQueryChange, beforeQueryChange) {
			return dispatch((0, _actions.setQueryListener)(component, onQueryChange, beforeQueryChange));
		},
		setQueryOptions: function setQueryOptions(component, props) {
			return dispatch((0, _actions.setQueryOptions)(component, props));
		}
	};
};

exports.default = (0, _utils.connect)(mapStateToProps, mapDispatchtoProps)(MultiDataList);

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/list/MultiList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emotion = __webpack_require__("./node_modules/emotion/dist/index.esm.js");

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/index.js");

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _utils = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/list/utils.js");

var _Title = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Title.js");

var _Title2 = _interopRequireDefault(_Title);

var _Input = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Container = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _FormControlList = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/FormControlList.js");

var _utils2 = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiList = function (_Component) {
	_inherits(MultiList, _Component);

	function MultiList(props) {
		_classCallCheck(this, MultiList);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_initialiseProps.call(_this);

		_this.state = {
			currentValue: {},
			options: props.options && props.options[props.dataField] ? _this.getOptions(props.options[props.dataField].buckets, props) : [],
			searchTerm: '',
			after: {}, // for composite aggs
			isLastBucket: false
		};
		_this.locked = false;
		_this.internalComponent = props.componentId + '__internal';
		props.setQueryListener(props.componentId, props.onQueryChange, null);
		return _this;
	}

	MultiList.prototype.componentWillMount = function componentWillMount() {
		this.props.addComponent(this.internalComponent);
		this.props.addComponent(this.props.componentId);
		this.updateQueryOptions(this.props);

		this.setReact(this.props);

		if (this.props.selectedValue) {
			this.setValue(this.props.selectedValue, true);
		} else if (this.props.defaultSelected) {
			this.setValue(this.props.defaultSelected, true);
		}
	};

	MultiList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		var _this2 = this;

		(0, _helper.checkPropChange)(this.props.react, nextProps.react, function () {
			return _this2.setReact(nextProps);
		});
		(0, _helper.checkPropChange)(this.props.options, nextProps.options, function () {
			var showLoadMore = nextProps.showLoadMore,
			    dataField = nextProps.dataField;

			if (showLoadMore) {
				var buckets = nextProps.options[dataField].buckets;

				var after = nextProps.options[dataField].after_key;
				// detect the last bucket by checking if the after key is absent
				var isLastBucket = !after;
				_this2.setState(function (state) {
					return _extends({}, state, {
						after: after ? { after: after } : state.after,
						isLastBucket: isLastBucket,
						options: _this2.getOptions(buckets, nextProps)
					});
				});
			} else {
				_this2.setState({
					options: nextProps.options[nextProps.dataField] ? _this2.getOptions(nextProps.options[nextProps.dataField].buckets, nextProps) : []
				});
			}
		});
		(0, _helper.checkSomePropChange)(this.props, nextProps, ['size', 'sortBy'], function () {
			return _this2.updateQueryOptions(nextProps);
		});

		(0, _helper.checkSomePropChange)(this.props, nextProps, ['dataField', 'nestedField'], function () {
			_this2.updateQueryOptions(nextProps);
			_this2.updateQuery(Object.keys(_this2.state.currentValue), nextProps);
		});

		var selectedValue = Object.keys(this.state.currentValue);

		if (this.props.selectAllLabel) {
			selectedValue = selectedValue.filter(function (val) {
				return val !== _this2.props.selectAllLabel;
			});

			if (this.state.currentValue[this.props.selectAllLabel]) {
				selectedValue = [this.props.selectAllLabel];
			}
		}
		if (!(0, _helper.isEqual)(this.props.defaultSelected, nextProps.defaultSelected)) {
			this.setValue(nextProps.defaultSelected, true);
		} else if (!(0, _helper.isEqual)(selectedValue, nextProps.selectedValue)) {
			this.setValue(nextProps.selectedValue || [], true);
		}
	};

	MultiList.prototype.componentWillUnmount = function componentWillUnmount() {
		this.props.removeComponent(this.props.componentId);
		this.props.removeComponent(this.internalComponent);
	};

	MultiList.generateQueryOptions = function generateQueryOptions(props, after) {
		var queryOptions = (0, _helper.getQueryOptions)(props);
		return props.showLoadMore ? (0, _utils.getCompositeAggsQuery)(queryOptions, props, after) : (0, _utils.getAggsQuery)(queryOptions, props);
	};

	MultiList.prototype.render = function render() {
		var _this3 = this;

		var _props = this.props,
		    selectAllLabel = _props.selectAllLabel,
		    renderListItem = _props.renderListItem,
		    showLoadMore = _props.showLoadMore,
		    loadMoreLabel = _props.loadMoreLabel;
		var isLastBucket = this.state.isLastBucket;


		if (this.props.isLoading && this.props.loader) {
			return this.props.loader;
		}

		if (this.state.options.length === 0) {
			return null;
		}

		var itemsToRender = this.state.options;


		if (this.props.transformData) {
			itemsToRender = this.props.transformData(itemsToRender);
		}

		return _react2.default.createElement(
			_Container2.default,
			{ style: this.props.style, className: this.props.className },
			this.props.title && _react2.default.createElement(
				_Title2.default,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'title') || null },
				this.props.title
			),
			this.renderSearch(),
			_react2.default.createElement(
				_FormControlList.UL,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'list') || null },
				selectAllLabel ? _react2.default.createElement(
					'li',
					{
						key: selectAllLabel,
						className: '' + (this.state.currentValue[selectAllLabel] ? 'active' : '')
					},
					_react2.default.createElement(_FormControlList.Checkbox, {
						className: (0, _helper.getClassName)(this.props.innerClass, 'checkbox') || null,
						id: this.props.componentId + '-' + selectAllLabel,
						name: selectAllLabel,
						value: selectAllLabel,
						onChange: this.handleClick,
						checked: !!this.state.currentValue[selectAllLabel],
						show: this.props.showCheckbox
					}),
					_react2.default.createElement(
						'label',
						{
							className: (0, _helper.getClassName)(this.props.innerClass, 'label') || null,
							htmlFor: this.props.componentId + '-' + selectAllLabel
						},
						selectAllLabel
					)
				) : null,
				itemsToRender.filter(function (item) {
					if (String(item.key).length) {
						if (_this3.props.showSearch && _this3.state.searchTerm) {
							return String(item.key).toLowerCase().includes(_this3.state.searchTerm.toLowerCase());
						}
						return true;
					}
					return false;
				}).map(function (item) {
					return _react2.default.createElement(
						'li',
						{
							key: item.key,
							className: '' + (_this3.state.currentValue[item.key] ? 'active' : '')
						},
						_react2.default.createElement(_FormControlList.Checkbox, {
							className: (0, _helper.getClassName)(_this3.props.innerClass, 'checkbox') || null,
							id: _this3.props.componentId + '-' + item.key,
							name: _this3.props.componentId,
							value: item.key,
							onChange: _this3.handleClick,
							checked: !!_this3.state.currentValue[item.key],
							show: _this3.props.showCheckbox
						}),
						_react2.default.createElement(
							'label',
							{
								className: (0, _helper.getClassName)(_this3.props.innerClass, 'label') || null,
								htmlFor: _this3.props.componentId + '-' + item.key
							},
							renderListItem ? renderListItem(item.key, item.doc_count) : _react2.default.createElement(
								'span',
								null,
								item.key,
								_this3.props.showCount && _react2.default.createElement(
									'span',
									{
										className: (0, _helper.getClassName)(_this3.props.innerClass, 'count') || null
									},
									'\xA0(',
									item.doc_count,
									')'
								)
							)
						)
					);
				}),
				showLoadMore && !isLastBucket && _react2.default.createElement(
					'div',
					{
						className: (0, _emotion.css)(_Button.loadMoreContainer)
					},
					_react2.default.createElement(
						_Button2.default,
						{ onClick: this.handleLoadMore },
						loadMoreLabel
					)
				)
			)
		);
	};

	return MultiList;
}(_react.Component);

MultiList.defaultQuery = function (value, props) {
	var query = null;
	var type = props.queryFormat === 'or' ? 'terms' : 'term';

	if (!Array.isArray(value) || value.length === 0) {
		return null;
	}

	if (props.selectAllLabel && value.includes(props.selectAllLabel)) {
		if (props.showMissing) {
			query = { match_all: {} };
		} else {
			query = {
				exists: {
					field: props.dataField
				}
			};
		}
	} else if (value) {
		var listQuery = void 0;
		if (props.queryFormat === 'or') {
			if (props.showMissing) {
				var _type, _ref;

				var hasMissingTerm = value.includes(props.missingLabel);
				var should = [(_ref = {}, _ref[type] = (_type = {}, _type[props.dataField] = value.filter(function (item) {
					return item !== props.missingLabel;
				}), _type), _ref)];
				if (hasMissingTerm) {
					should = should.concat({
						bool: {
							must_not: {
								exists: { field: props.dataField }
							}
						}
					});
				}
				listQuery = {
					bool: {
						should: should
					}
				};
			} else {
				var _type2, _listQuery;

				listQuery = (_listQuery = {}, _listQuery[type] = (_type2 = {}, _type2[props.dataField] = value, _type2), _listQuery);
			}
		} else {
			// adds a sub-query with must as an array of objects for each term/value
			var queryArray = value.map(function (item) {
				var _type3, _ref2;

				return _ref2 = {}, _ref2[type] = (_type3 = {}, _type3[props.dataField] = item, _type3), _ref2;
			});
			listQuery = {
				bool: {
					must: queryArray
				}
			};
		}

		query = value.length ? listQuery : null;
	}

	if (query && props.nestedField) {
		return {
			query: {
				nested: {
					path: props.nestedField,
					query: query
				}
			}
		};
	}

	return query;
};

var _initialiseProps = function _initialiseProps() {
	var _this4 = this;

	this.setReact = function (props) {
		var react = props.react;

		if (react) {
			var newReact = (0, _helper.pushToAndClause)(react, _this4.internalComponent);
			props.watchComponent(props.componentId, newReact);
		} else {
			props.watchComponent(props.componentId, {
				and: _this4.internalComponent
			});
		}
	};

	this.getOptions = function (buckets, props) {
		if (props.showLoadMore) {
			return buckets.map(function (bucket) {
				return {
					key: bucket.key[props.dataField],
					doc_count: bucket.doc_count
				};
			});
		}

		return buckets;
	};

	this.setValue = function (value) {
		var isDefaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this4.props;

		// ignore state updates when component is locked
		if (props.beforeValueChange && _this4.locked) {
			return;
		}

		_this4.locked = true;
		var selectAllLabel = _this4.props.selectAllLabel;
		var currentValue = _this4.state.currentValue;

		var finalValues = null;

		if (selectAllLabel && (Array.isArray(value) && value.includes(selectAllLabel) || typeof value === 'string' && value === selectAllLabel)) {
			if (currentValue[selectAllLabel]) {
				currentValue = {};
				finalValues = [];
			} else {
				_this4.state.options.forEach(function (item) {
					currentValue[item.key] = true;
				});
				currentValue[selectAllLabel] = true;
				finalValues = [selectAllLabel];
			}
		} else if (isDefaultValue) {
			finalValues = value;
			currentValue = {};
			if (value) {
				value.forEach(function (item) {
					currentValue[item] = true;
				});
			}

			if (selectAllLabel && selectAllLabel in currentValue) {
				var _currentValue = currentValue,
				    del = _currentValue[selectAllLabel],
				    obj = _objectWithoutProperties(_currentValue, [selectAllLabel]);

				currentValue = _extends({}, obj);
			}
		} else {
			if (currentValue[value]) {
				var _currentValue2 = currentValue,
				    _del = _currentValue2[value],
				    rest = _objectWithoutProperties(_currentValue2, [value]);

				currentValue = _extends({}, rest);
			} else {
				currentValue[value] = true;
			}

			if (selectAllLabel && selectAllLabel in currentValue) {
				var _currentValue3 = currentValue,
				    _del2 = _currentValue3[selectAllLabel],
				    _obj = _objectWithoutProperties(_currentValue3, [selectAllLabel]);

				currentValue = _extends({}, _obj);
			}
			finalValues = Object.keys(currentValue);
		}

		var performUpdate = function performUpdate() {
			_this4.setState({
				currentValue: currentValue
			}, function () {
				_this4.updateQuery(finalValues, props);
				_this4.locked = false;
				if (props.onValueChange) props.onValueChange(finalValues);
			});
		};

		(0, _helper.checkValueChange)(props.componentId, finalValues, props.beforeValueChange, performUpdate);
	};

	this.updateQuery = function (value, props) {
		var query = props.customQuery || MultiList.defaultQuery;

		props.updateQuery({
			componentId: props.componentId,
			query: query(value, props),
			value: value,
			label: props.filterLabel,
			showFilter: props.showFilter,
			URLParams: props.URLParams,
			componentType: 'MULTILIST'
		});
	};

	this.updateQueryOptions = function (props) {
		var addAfterKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		// when using composite aggs flush the current options for a fresh query
		if (props.showLoadMore && !addAfterKey) {
			_this4.setState({
				options: []
			});
		}
		// for a new query due to other changes don't append after to get fresh results
		var queryOptions = MultiList.generateQueryOptions(props, addAfterKey ? _this4.state.after : {});
		props.setQueryOptions(_this4.internalComponent, queryOptions);
	};

	this.handleInputChange = function (e) {
		var value = e.target.value;

		_this4.setState({
			searchTerm: value
		});
	};

	this.handleLoadMore = function () {
		var queryOptions = MultiList.generateQueryOptions(_this4.props, _this4.state.after);
		_this4.props.loadMore(_this4.props.componentId, queryOptions);
	};

	this.renderSearch = function () {
		if (_this4.props.showSearch) {
			return _react2.default.createElement(_Input2.default, {
				className: (0, _helper.getClassName)(_this4.props.innerClass, 'input') || null,
				onChange: _this4.handleInputChange,
				value: _this4.state.searchTerm,
				placeholder: _this4.props.placeholder,
				style: {
					margin: '0 0 8px'
				},
				themePreset: _this4.props.themePreset
			});
		}
		return null;
	};

	this.handleClick = function (e) {
		_this4.setValue(e.target.value);
	};
};

MultiList.propTypes = {
	addComponent: _types2.default.funcRequired,
	removeComponent: _types2.default.funcRequired,
	setQueryListener: _types2.default.funcRequired,
	setQueryOptions: _types2.default.funcRequired,
	loadMore: _types2.default.funcRequired,
	updateQuery: _types2.default.funcRequired,
	watchComponent: _types2.default.funcRequired,
	options: _types2.default.options,
	selectedValue: _types2.default.selectedValue,
	// component props
	beforeValueChange: _types2.default.func,
	className: _types2.default.string,
	componentId: _types2.default.stringRequired,
	customQuery: _types2.default.func,
	dataField: _types2.default.stringRequired,
	nestedField: _types2.default.string,
	defaultSelected: _types2.default.stringArray,
	filterLabel: _types2.default.string,
	innerClass: _types2.default.style,
	isLoading: _types2.default.bool,
	loader: _types2.default.title,
	onQueryChange: _types2.default.func,
	onValueChange: _types2.default.func,
	placeholder: _types2.default.string,
	queryFormat: _types2.default.queryFormatSearch,
	react: _types2.default.react,
	renderListItem: _types2.default.func,
	transformData: _types2.default.func,
	selectAllLabel: _types2.default.string,
	showCheckbox: _types2.default.boolRequired,
	showCount: _types2.default.bool,
	showSearch: _types2.default.bool,
	size: _types2.default.number,
	sortBy: _types2.default.sortByWithCount,
	style: _types2.default.style,
	themePreset: _types2.default.themePreset,
	title: _types2.default.title,
	URLParams: _types2.default.bool,
	showMissing: _types2.default.bool,
	missingLabel: _types2.default.string,
	showLoadMore: _types2.default.bool,
	loadMoreLabel: _types2.default.title
};

MultiList.defaultProps = {
	className: null,
	placeholder: 'Search',
	queryFormat: 'or',
	showCheckbox: true,
	showCount: true,
	showSearch: true,
	size: 100,
	sortBy: 'count',
	style: {},
	URLParams: false,
	showMissing: false,
	missingLabel: 'N/A',
	showLoadMore: false,
	loadMoreLabel: 'Load More'
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		options: props.nestedField && state.aggregations[props.componentId] ? state.aggregations[props.componentId].reactivesearch_nested : state.aggregations[props.componentId],
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || null,
		isLoading: state.isLoading[props.componentId],
		themePreset: state.config.themePreset
	};
};

var mapDispatchtoProps = function mapDispatchtoProps(dispatch) {
	return {
		addComponent: function addComponent(component) {
			return dispatch((0, _actions.addComponent)(component));
		},
		removeComponent: function removeComponent(component) {
			return dispatch((0, _actions.removeComponent)(component));
		},
		setQueryOptions: function setQueryOptions(component, props) {
			return dispatch((0, _actions.setQueryOptions)(component, props));
		},
		loadMore: function loadMore(component, aggsQuery) {
			return dispatch((0, _actions.loadMore)(component, aggsQuery, true, true));
		},
		setQueryListener: function setQueryListener(component, onQueryChange, beforeQueryChange) {
			return dispatch((0, _actions.setQueryListener)(component, onQueryChange, beforeQueryChange));
		},
		updateQuery: function updateQuery(updateQueryObject) {
			return dispatch((0, _actions.updateQuery)(updateQueryObject));
		},
		watchComponent: function watchComponent(component, react) {
			return dispatch((0, _actions.watchComponent)(component, react));
		}
	};
};

exports.default = (0, _utils2.connect)(mapStateToProps, mapDispatchtoProps)(MultiList);

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/list/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getCompositeAggsQuery = exports.getAggsQuery = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var getAggsQuery = function getAggsQuery(query, props, include) {
	var _clonedQuery$aggs;

	var clonedQuery = _extends({}, query);
	var dataField = props.dataField,
	    size = props.size,
	    sortBy = props.sortBy,
	    showMissing = props.showMissing,
	    missingLabel = props.missingLabel;


	var includesQuery = {};

	if (include) {
		includesQuery = {
			include: include
		};
	}

	clonedQuery.size = 0;
	clonedQuery.aggs = (_clonedQuery$aggs = {}, _clonedQuery$aggs[dataField] = {
		terms: _extends({
			field: dataField,
			size: size,
			order: (0, _helper.getAggsOrder)(sortBy || 'count')
		}, showMissing ? { missing: missingLabel } : {}, includesQuery)
	}, _clonedQuery$aggs);

	if (props.nestedField) {
		clonedQuery.aggs = {
			reactivesearch_nested: {
				nested: {
					path: props.nestedField
				},
				aggs: clonedQuery.aggs
			}
		};
	}

	return clonedQuery;
};

var getCompositeAggsQuery = function getCompositeAggsQuery(query, props, after) {
	var _ref, _clonedQuery$aggs2;

	var clonedQuery = _extends({}, query);
	// missing label not available in composite aggs
	var dataField = props.dataField,
	    size = props.size,
	    sortBy = props.sortBy,
	    showMissing = props.showMissing;

	// composite aggs only allows asc and desc

	var order = sortBy === 'count' ? {} : { order: sortBy };

	clonedQuery.aggs = (_clonedQuery$aggs2 = {}, _clonedQuery$aggs2[dataField] = {
		composite: _extends({
			sources: [(_ref = {}, _ref[dataField] = {
				terms: _extends({
					field: dataField
				}, order, showMissing ? { missing_bucket: true } : {})
			}, _ref)],
			size: size
		}, after)
	}, _clonedQuery$aggs2);

	if (props.nestedField) {
		clonedQuery.aggs = {
			reactivesearch_nested: {
				nested: {
					path: props.nestedField
				},
				aggs: clonedQuery.aggs
			}
		};
	}

	return clonedQuery;
};

exports.getAggsQuery = getAggsQuery;
exports.getCompositeAggsQuery = getCompositeAggsQuery;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/range/RangeSlider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/index.js");

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _Slider = __webpack_require__("./node_modules/rheostat/lib/Slider.js");

var _Slider2 = _interopRequireDefault(_Slider);

var _HistogramContainer = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/range/addons/HistogramContainer.js");

var _HistogramContainer2 = _interopRequireDefault(_HistogramContainer);

var _RangeLabel = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/range/addons/RangeLabel.js");

var _RangeLabel2 = _interopRequireDefault(_RangeLabel);

var _SliderHandle = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/range/addons/SliderHandle.js");

var _SliderHandle2 = _interopRequireDefault(_SliderHandle);

var _Slider3 = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Slider.js");

var _Slider4 = _interopRequireDefault(_Slider3);

var _Title = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Title.js");

var _Title2 = _interopRequireDefault(_Title);

var _Label = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Label.js");

var _utils = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangeSlider = function (_Component) {
	_inherits(RangeSlider, _Component);

	function RangeSlider(props) {
		_classCallCheck(this, RangeSlider);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_initialiseProps.call(_this);

		_this.state = {
			currentValue: [props.range.start, props.range.end],
			stats: []
		};

		_this.locked = false;
		_this.internalComponent = _this.props.componentId + '__internal';
		props.setQueryListener(props.componentId, props.onQueryChange, null);
		return _this;
	}

	RangeSlider.prototype.componentWillMount = function componentWillMount() {
		this.props.addComponent(this.props.componentId);
		this.props.addComponent(this.internalComponent);

		this.updateQueryOptions(this.props);
		this.setReact(this.props);

		var _props = this.props,
		    selectedValue = _props.selectedValue,
		    defaultSelected = _props.defaultSelected;

		if (Array.isArray(selectedValue)) {
			this.handleChange(selectedValue);
		} else if (selectedValue) {
			// for value as an object for SSR
			this.handleChange(RangeSlider.parseValue(selectedValue, this.props));
		} else if (defaultSelected) {
			this.handleChange(RangeSlider.parseValue(defaultSelected, this.props));
		}
	};

	RangeSlider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		var _this2 = this;

		(0, _helper.checkPropChange)(this.props.react, nextProps.react, function () {
			return _this2.setReact(nextProps);
		});
		(0, _helper.checkSomePropChange)(this.props, nextProps, ['showHistogram', 'interval'], function () {
			return _this2.updateQueryOptions(nextProps);
		});
		(0, _helper.checkPropChange)(this.props.options, nextProps.options, function () {
			var options = nextProps.options;

			if (Array.isArray(options)) {
				options.sort(function (a, b) {
					if (a.key < b.key) return -1;
					if (a.key > b.key) return 1;
					return 0;
				});
			}
			_this2.setState({
				stats: options || []
			});
		});

		(0, _helper.checkSomePropChange)(this.props, nextProps, ['dataField', 'nestedField'], function () {
			_this2.updateQueryOptions(nextProps);
			_this2.handleChange(_this2.state.currentValue, nextProps);
		});

		if (!(0, _helper.isEqual)(this.props.defaultSelected, nextProps.defaultSelected)) {
			this.handleChange([nextProps.defaultSelected.start, nextProps.defaultSelected.end], nextProps);
		} else if (!(0, _helper.isEqual)(this.state.currentValue, nextProps.selectedValue)) {
			this.handleChange(nextProps.selectedValue || [nextProps.range.start, nextProps.range.end]);
		}
	};

	RangeSlider.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
		var upperLimit = Math.floor((nextProps.range.end - nextProps.range.start) / 2);
		if (nextProps.stepValue < 1 || nextProps.stepValue > upperLimit) {
			console.warn('stepValue for RangeSlider ' + nextProps.componentId + ' should be greater than 0 and less than or equal to ' + upperLimit);
			return false;
		}
		return true;
	};

	RangeSlider.prototype.componentWillUnmount = function componentWillUnmount() {
		this.props.removeComponent(this.props.componentId);
		this.props.removeComponent(this.internalComponent);
	};

	RangeSlider.prototype.render = function render() {
		var _this3 = this;

		return _react2.default.createElement(
			_Slider4.default,
			{ primary: true, style: this.props.style, className: this.props.className },
			this.props.title && _react2.default.createElement(
				_Title2.default,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'title') || null },
				this.props.title
			),
			this.state.stats.length && this.props.showHistogram && this.props.showSlider ? _react2.default.createElement(_HistogramContainer2.default, {
				stats: this.state.stats,
				range: this.props.range,
				interval: this.getValidInterval(this.props)
			}) : null,
			this.props.showSlider && _react2.default.createElement(_Slider2.default, {
				min: this.props.range.start,
				max: this.props.range.end,
				values: this.state.currentValue,
				onChange: this.handleSlider,
				onValuesUpdated: this.handleDrag,
				snap: this.props.snap,
				snapPoints: this.props.snap ? this.getSnapPoints() : null,
				className: (0, _helper.getClassName)(this.props.innerClass, 'slider'),
				handle: function handle(_ref) {
					var className = _ref.className,
					    style = _ref.style,
					    passProps = _objectWithoutProperties(_ref, ['className', 'style']);

					return _react2.default.createElement(_SliderHandle2.default, _extends({
						style: style,
						className: className
					}, passProps, {
						renderTooltipData: _this3.props.renderTooltipData,
						tooltipTrigger: _this3.props.tooltipTrigger
					}));
				}
			}),
			this.props.rangeLabels && this.props.showSlider && _react2.default.createElement(
				'div',
				{ className: _Label.rangeLabelsContainer },
				_react2.default.createElement(
					_RangeLabel2.default,
					{
						align: 'left',
						className: (0, _helper.getClassName)(this.props.innerClass, 'label') || null
					},
					this.props.rangeLabels.start
				),
				_react2.default.createElement(
					_RangeLabel2.default,
					{
						align: 'right',
						className: (0, _helper.getClassName)(this.props.innerClass, 'label') || null
					},
					this.props.rangeLabels.end
				)
			)
		);
	};

	return RangeSlider;
}(_react.Component);

RangeSlider.parseValue = function (value, props) {
	return value ? [value.start, value.end] : [props.range.start, props.range.end];
};

RangeSlider.defaultQuery = function (value, props) {
	var query = null;
	if (Array.isArray(value) && value.length) {
		var _range;

		query = {
			range: (_range = {}, _range[props.dataField] = {
				gte: value[0],
				lte: value[1],
				boost: 2.0
			}, _range)
		};
	}
	if (query && props.nestedField) {
		return {
			query: {
				nested: {
					path: props.nestedField,
					query: query
				}
			}
		};
	}

	return query;
};

var _initialiseProps = function _initialiseProps() {
	var _this4 = this;

	this.setReact = function (props) {
		var react = props.react;

		if (react) {
			var newReact = (0, _helper.pushToAndClause)(react, _this4.internalComponent);
			props.watchComponent(props.componentId, newReact);
		} else {
			props.watchComponent(props.componentId, {
				and: _this4.internalComponent
			});
		}
	};

	this.getSnapPoints = function () {
		var snapPoints = [];
		var stepValue = _this4.props.stepValue;

		// limit the number of steps to prevent generating a large number of snapPoints

		if ((_this4.props.range.end - _this4.props.range.start) / stepValue > 100) {
			stepValue = (_this4.props.range.end - _this4.props.range.start) / 100;
		}

		for (var i = _this4.props.range.start; i <= _this4.props.range.end; i += stepValue) {
			snapPoints = snapPoints.concat(i);
		}
		if (snapPoints[snapPoints.length - 1] !== _this4.props.range.end) {
			snapPoints = snapPoints.concat(_this4.props.range.end);
		}
		return snapPoints;
	};

	this.getValidInterval = function (props) {
		var min = Math.ceil((props.range.end - props.range.start) / 100) || 1;
		if (!props.interval) {
			return min;
		} else if (props.interval < min) {
			console.error(props.componentId + ': interval prop\'s value should be greater than or equal to ' + min);
			return min;
		}
		return props.interval;
	};

	this.histogramQuery = function (props) {
		var _ref2;

		return _ref2 = {}, _ref2[props.dataField] = {
			histogram: {
				field: props.dataField,
				interval: _this4.getValidInterval(props),
				offset: props.range.start
			}
		}, _ref2;
	};

	this.handleChange = function (currentValue) {
		var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this4.props;

		// ignore state updates when component is locked
		if (props.beforeValueChange && _this4.locked) {
			return;
		}

		_this4.locked = true;
		var performUpdate = function performUpdate() {
			_this4.setState({
				currentValue: currentValue
			}, function () {
				_this4.updateQuery([currentValue[0], currentValue[1]], props);
				_this4.locked = false;
				if (props.onValueChange) {
					props.onValueChange({
						start: currentValue[0],
						end: currentValue[1]
					});
				}
			});
		};
		(0, _helper.checkValueChange)(props.componentId, {
			start: currentValue[0],
			end: currentValue[1]
		}, props.beforeValueChange, performUpdate);
	};

	this.handleSlider = function (_ref3) {
		var values = _ref3.values;

		if (!(0, _helper.isEqual)(values, _this4.state.currentValue)) {
			_this4.handleChange(values);
		}
	};

	this.handleDrag = function (values) {
		if (_this4.props.onDrag) {
			var min = values.min,
			    max = values.max,
			    currentValue = values.values;

			_this4.props.onDrag(currentValue, [min, max]);
		}
	};

	this.updateQuery = function (value, props) {
		var query = props.customQuery || RangeSlider.defaultQuery;
		var showFilter = props.showFilter,
		    _props$range = props.range,
		    start = _props$range.start,
		    end = _props$range.end;
		var currentStart = value[0],
		    currentEnd = value[1];
		// check if the slider is at its initial position

		var isInitialValue = currentStart === start && currentEnd === end;
		props.updateQuery({
			componentId: props.componentId,
			query: query(value, props),
			value: value,
			label: props.filterLabel,
			showFilter: showFilter && !isInitialValue,
			URLParams: props.URLParams,
			componentType: 'RANGESLIDER'
		});
	};

	this.updateQueryOptions = function (props) {
		if (props.showHistogram) {
			var queryOptions = {
				size: 0,
				aggs: (props.histogramQuery || _this4.histogramQuery)(props)
			};

			props.setQueryOptions(_this4.internalComponent, queryOptions, false);

			var query = props.customQuery || RangeSlider.defaultQuery;

			props.updateQuery({
				componentId: _this4.internalComponent,
				query: query([props.range.start, props.range.end], props)
			});
		}
	};
};

RangeSlider.propTypes = {
	addComponent: _types2.default.funcRequired,
	removeComponent: _types2.default.funcRequired,
	setQueryListener: _types2.default.funcRequired,
	setQueryOptions: _types2.default.funcRequired,
	updateQuery: _types2.default.funcRequired,
	watchComponent: _types2.default.funcRequired,
	options: _types2.default.options,
	selectedValue: _types2.default.selectedValue,
	// component props
	beforeValueChange: _types2.default.func,
	className: _types2.default.string,
	componentId: _types2.default.stringRequired,
	customQuery: _types2.default.func,
	dataField: _types2.default.stringRequired,
	defaultSelected: _types2.default.range,
	filterLabel: _types2.default.string,
	innerClass: _types2.default.style,
	interval: _types2.default.number,
	onDrag: _types2.default.func,
	onQueryChange: _types2.default.func,
	onValueChange: _types2.default.func,
	range: _types2.default.range,
	rangeLabels: _types2.default.rangeLabels,
	react: _types2.default.react,
	showHistogram: _types2.default.bool,
	histogramQuery: _types2.default.func,
	showFilter: _types2.default.bool,
	showSlider: _types2.default.bool,
	tooltipTrigger: _types2.default.tooltipTrigger,
	renderTooltipData: _types2.default.func,
	snap: _types2.default.bool,
	stepValue: _types2.default.number,
	style: _types2.default.style,
	title: _types2.default.title,
	nestedField: _types2.default.string,
	URLParams: _types2.default.bool
};

RangeSlider.defaultProps = {
	className: null,
	range: {
		start: 0,
		end: 10
	},
	showHistogram: true,
	showSlider: true,
	tooltipTrigger: 'none',
	snap: true,
	stepValue: 1,
	showFilter: true,
	style: {},
	URLParams: false
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		options: state.aggregations[props.componentId] ? state.aggregations[props.componentId][props.dataField] && state.aggregations[props.componentId][props.dataField].buckets // eslint-disable-line
		: [],
		selectedValue: state.selectedValues[props.componentId] ? state.selectedValues[props.componentId].value : null
	};
};

var mapDispatchtoProps = function mapDispatchtoProps(dispatch) {
	return {
		addComponent: function addComponent(component) {
			return dispatch((0, _actions.addComponent)(component));
		},
		removeComponent: function removeComponent(component) {
			return dispatch((0, _actions.removeComponent)(component));
		},
		setQueryOptions: function setQueryOptions(component, props, execute) {
			return dispatch((0, _actions.setQueryOptions)(component, props, execute));
		},
		setQueryListener: function setQueryListener(component, onQueryChange, beforeQueryChange) {
			return dispatch((0, _actions.setQueryListener)(component, onQueryChange, beforeQueryChange));
		},
		updateQuery: function updateQuery(updateQueryObject) {
			return dispatch((0, _actions.updateQuery)(updateQueryObject));
		},
		watchComponent: function watchComponent(component, react) {
			return dispatch((0, _actions.watchComponent)(component, react));
		}
	};
};

exports.default = (0, _utils.connect)(mapStateToProps, mapDispatchtoProps)(RangeSlider);

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/range/SingleRange.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/index.js");

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _Title = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Title.js");

var _Title2 = _interopRequireDefault(_Title);

var _Container = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _FormControlList = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/FormControlList.js");

var _utils = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleRange = function (_Component) {
	_inherits(SingleRange, _Component);

	function SingleRange(props) {
		_classCallCheck(this, SingleRange);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_initialiseProps.call(_this);

		_this.state = {
			currentValue: null
		};
		_this.type = 'range';
		_this.locked = false;
		props.setQueryListener(props.componentId, props.onQueryChange, null);
		return _this;
	}

	SingleRange.prototype.componentWillMount = function componentWillMount() {
		this.props.addComponent(this.props.componentId);
		this.setReact(this.props);

		if (this.props.selectedValue) {
			this.setValue(this.props.selectedValue);
		} else if (this.props.defaultSelected) {
			this.setValue(this.props.defaultSelected);
		}
	};

	SingleRange.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		var _this2 = this;

		(0, _helper.checkPropChange)(this.props.react, nextProps.react, function () {
			return _this2.setReact(nextProps);
		});

		(0, _helper.checkSomePropChange)(this.props, nextProps, ['dataField', 'nestedField'], function () {
			_this2.updateQuery(_this2.state.currentValue, nextProps);
		});

		if (!(0, _helper.isEqual)(this.props.defaultSelected, nextProps.defaultSelected)) {
			this.setValue(nextProps.defaultSelected);
		} else if (!(0, _helper.isEqual)(this.state.currentValue, nextProps.selectedValue)) {
			this.setValue(nextProps.selectedValue);
		}
	};

	SingleRange.prototype.componentWillUnmount = function componentWillUnmount() {
		this.props.removeComponent(this.props.componentId);
	};

	SingleRange.prototype.setReact = function setReact(props) {
		if (props.react) {
			props.watchComponent(props.componentId, props.react);
		}
	};

	// parses range label to get start and end


	SingleRange.prototype.render = function render() {
		var _this3 = this;

		return _react2.default.createElement(
			_Container2.default,
			{ style: this.props.style, className: this.props.className },
			this.props.title && _react2.default.createElement(
				_Title2.default,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'title') || null },
				this.props.title
			),
			_react2.default.createElement(
				_FormControlList.UL,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'list') || null },
				this.props.data.map(function (item) {
					var selected = !!_this3.state.currentValue && _this3.state.currentValue.label === item.label;
					return _react2.default.createElement(
						'li',
						{ key: item.label, className: '' + (selected ? 'active' : '') },
						_react2.default.createElement(_FormControlList.Radio, {
							className: (0, _helper.getClassName)(_this3.props.innerClass, 'radio'),
							id: _this3.props.componentId + '-' + item.label,
							name: _this3.props.componentId,
							value: item.label,
							onChange: _this3.handleClick,
							checked: selected,
							show: _this3.props.showRadio
						}),
						_react2.default.createElement(
							'label',
							{
								className: (0, _helper.getClassName)(_this3.props.innerClass, 'label') || null,
								htmlFor: _this3.props.componentId + '-' + item.label
							},
							item.label
						)
					);
				})
			)
		);
	};

	return SingleRange;
}(_react.Component);

SingleRange.parseValue = function (value, props) {
	return props.data.find(function (item) {
		return item.label === value;
	}) || null;
};

SingleRange.defaultQuery = function (value, props) {
	var query = null;
	if (value) {
		var _range;

		query = {
			range: (_range = {}, _range[props.dataField] = {
				gte: value.start,
				lte: value.end,
				boost: 2.0
			}, _range)
		};
	}
	if (query && props.nestedField) {
		return {
			query: {
				nested: {
					path: props.nestedField,
					query: query
				}
			}
		};
	}

	return query;
};

var _initialiseProps = function _initialiseProps() {
	var _this4 = this;

	this.setValue = function (value) {
		var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this4.props;

		// ignore state updates when component is locked
		if (props.beforeValueChange && _this4.locked) {
			return;
		}

		_this4.locked = true;
		var currentValue = SingleRange.parseValue(value, props);

		var performUpdate = function performUpdate() {
			_this4.setState({
				currentValue: currentValue
			}, function () {
				_this4.updateQuery(currentValue, props);
				_this4.locked = false;
				if (props.onValueChange) props.onValueChange(currentValue);
			});
		};

		(0, _helper.checkValueChange)(props.componentId, currentValue, props.beforeValueChange, performUpdate);
	};

	this.updateQuery = function (value, props) {
		var query = props.customQuery || SingleRange.defaultQuery;

		props.updateQuery({
			componentId: props.componentId,
			query: query(value, props),
			value: value,
			label: props.filterLabel,
			showFilter: props.showFilter,
			URLParams: props.URLParams,
			componentType: 'SINGLERANGE'
		});
	};

	this.handleClick = function (e) {
		_this4.setValue(e.target.value);
	};
};

SingleRange.propTypes = {
	addComponent: _types2.default.funcRequired,
	removeComponent: _types2.default.funcRequired,
	setQueryListener: _types2.default.funcRequired,
	updateQuery: _types2.default.funcRequired,
	watchComponent: _types2.default.funcRequired,
	selectedValue: _types2.default.selectedValue,
	// component props
	beforeValueChange: _types2.default.func,
	className: _types2.default.string,
	componentId: _types2.default.stringRequired,
	customQuery: _types2.default.func,
	data: _types2.default.data,
	dataField: _types2.default.stringRequired,
	defaultSelected: _types2.default.string,
	filterLabel: _types2.default.string,
	innerClass: _types2.default.style,
	onQueryChange: _types2.default.func,
	onValueChange: _types2.default.func,
	react: _types2.default.react,
	showFilter: _types2.default.bool,
	showRadio: _types2.default.boolRequired,
	style: _types2.default.style,
	title: _types2.default.title,
	URLParams: _types2.default.bool,
	nestedField: _types2.default.string
};

SingleRange.defaultProps = {
	className: null,
	showFilter: true,
	showRadio: true,
	style: {},
	URLParams: false
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || null
	};
};

var mapDispatchtoProps = function mapDispatchtoProps(dispatch) {
	return {
		addComponent: function addComponent(component) {
			return dispatch((0, _actions.addComponent)(component));
		},
		removeComponent: function removeComponent(component) {
			return dispatch((0, _actions.removeComponent)(component));
		},
		updateQuery: function updateQuery(updateQueryObject) {
			return dispatch((0, _actions.updateQuery)(updateQueryObject));
		},
		watchComponent: function watchComponent(component, react) {
			return dispatch((0, _actions.watchComponent)(component, react));
		},
		setQueryListener: function setQueryListener(component, onQueryChange, beforeQueryChange) {
			return dispatch((0, _actions.setQueryListener)(component, onQueryChange, beforeQueryChange));
		}
	};
};

exports.default = (0, _utils.connect)(mapStateToProps, mapDispatchtoProps)(SingleRange);

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/range/addons/HistogramContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _Histogram = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Histogram.js");

var _Histogram2 = _interopRequireDefault(_Histogram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getWidth = function getWidth(index, range, item, props) {
	var diff = void 0;
	if (index < range.length - 1) {
		diff = range[index + 1].key - item.key;
	} else {
		diff = props.range.end - item.key;
	}
	var fullRange = props.range.end - props.range.start;
	return diff / fullRange * 100 + '%';
};

var HistogramContainer = function HistogramContainer(props) {
	var max = props.stats[0].doc_count;
	props.stats.forEach(function (item) {
		if (max < item.doc_count) {
			max = item.doc_count;
		}
	});

	var range = [].concat(props.stats);
	if (props.stats.length) {
		if (range[0].key > props.range.start) {
			range = [{ key: props.range.start, doc_count: 0 }].concat(range);
		}
		var lastElement = range[range.length - 1];
		if (lastElement.key + props.interval < props.range.end) {
			range = [].concat(range, [{ key: props.interval + lastElement.key, doc_count: 0 }]);
		}
	}

	return _react2.default.createElement(
		'div',
		{ className: _Histogram.histogramContainer },
		range.map(function (item, index) {
			return _react2.default.createElement(_Histogram2.default, {
				key: item.key,
				width: getWidth(index, range, item, props),
				height: (100 * item.doc_count / max || 0) + '%',
				title: item.doc_count
			});
		})
	);
};

HistogramContainer.propTypes = {
	interval: _types2.default.number,
	range: _types2.default.range,
	stats: _types2.default.stats
};

exports.default = HistogramContainer;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/range/addons/RangeLabel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _Label = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Label.js");

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangeLabel = function RangeLabel(_ref) {
	var align = _ref.align,
	    children = _ref.children,
	    className = _ref.className;
	return (
		// eslint-disable-next-line
		_react2.default.createElement(
			_Label2.default,
			{ align: align, className: className },
			children
		)
	);
};

RangeLabel.propTypes = {
	align: _types2.default.rangeLabelsAlign,
	children: _types2.default.children,
	className: _types2.default.string
};

exports.default = RangeLabel;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/range/addons/SliderHandle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SliderHandle = function SliderHandle(_ref) {
	var className = _ref.className,
	    style = _ref.style,
	    tooltipTrigger = _ref.tooltipTrigger,
	    renderTooltipData = _ref.renderTooltipData,
	    passProps = _objectWithoutProperties(_ref, ['className', 'style', 'tooltipTrigger', 'renderTooltipData']);

	if (tooltipTrigger) {
		var tooltipClassname = '';
		switch (tooltipTrigger) {
			case 'hover':
				tooltipClassname = 'slider-tooltip';
				break;
			case 'focus':
				tooltipClassname = 'slider-tooltip-focus';
				break;
			case 'always':
				tooltipClassname = 'slider-tooltip-visible';
				break;
			case 'none':
			default:
				return _react2.default.createElement('button', _extends({ style: style, className: className }, passProps));
		}
		var tooltipContent = passProps['aria-valuenow'];
		return _react2.default.createElement(
			'button',
			_extends({ style: style, className: className }, passProps),
			_react2.default.createElement(
				'span',
				{ className: tooltipClassname },
				renderTooltipData ? renderTooltipData(tooltipContent) : tooltipContent
			)
		);
	}
	return _react2.default.createElement('button', _extends({ style: style, className: className }, passProps));
};

exports.default = SliderHandle;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/result/ReactiveList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/index.js");

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _Pagination = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/result/addons/Pagination.js");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PoweredBy = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/result/addons/PoweredBy.js");

var _PoweredBy2 = _interopRequireDefault(_PoweredBy);

var _Flex = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Flex.js");

var _Flex2 = _interopRequireDefault(_Flex);

var _results = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/results.js");

var _utils = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactiveList = function (_Component) {
	_inherits(ReactiveList, _Component);

	function ReactiveList(props) {
		_classCallCheck(this, ReactiveList);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_initialiseProps.call(_this);

		var currentPage = 0;
		if (_this.props.defaultPage >= 0) {
			currentPage = _this.props.defaultPage;
		} else if (_this.props.currentPage) {
			currentPage = Math.max(_this.props.currentPage - 1, 0);
		}
		_this.initialFrom = currentPage * props.size; // used for page resetting on query change
		_this.state = {
			from: _this.initialFrom,
			currentPage: currentPage
		};
		_this.internalComponent = props.componentId + '__internal';
		props.setQueryListener(props.componentId, props.onQueryChange, props.onError);
		return _this;
	}

	ReactiveList.prototype.componentDidMount = function componentDidMount() {
		this.props.addComponent(this.internalComponent);
		this.props.addComponent(this.props.componentId);

		if (this.props.stream) {
			this.props.setStreaming(this.props.componentId, true);
		}

		var options = (0, _helper.getQueryOptions)(this.props);
		options.from = this.state.from;
		if (this.props.sortOptions) {
			var _ref;

			options.sort = [(_ref = {}, _ref[this.props.sortOptions[0].dataField] = {
				order: this.props.sortOptions[0].sortBy
			}, _ref)];
		} else if (this.props.sortBy) {
			var _ref2;

			options.sort = [(_ref2 = {}, _ref2[this.props.dataField] = {
				order: this.props.sortBy
			}, _ref2)];
		}

		// Override sort query with defaultQuery's sort if defined
		this.defaultQuery = null;
		if (this.props.defaultQuery) {
			this.defaultQuery = this.props.defaultQuery();
			if (this.defaultQuery.sort) {
				options.sort = this.defaultQuery.sort;
			}
		}

		var _ref3 = this.defaultQuery || {},
		    sort = _ref3.sort,
		    query = _objectWithoutProperties(_ref3, ['sort']);

		// execute is set to false at the time of mount
		// to avoid firing (multiple) partial queries.
		// Hence we are building the query in parts here
		// and only executing it with setReact() at core


		var execute = false;

		this.props.setQueryOptions(this.props.componentId, options, execute);

		if (this.defaultQuery) {
			this.props.updateQuery({
				componentId: this.internalComponent,
				query: query
			}, execute);
		} else {
			this.props.updateQuery({
				componentId: this.internalComponent,
				query: null
			}, execute);
		}

		// query will be executed here
		this.setReact(this.props);

		this.domNode = window;
		if (!this.props.pagination) {
			var scrollTarget = this.props.scrollTarget;

			if (scrollTarget) {
				this.domNode = document.getElementById(scrollTarget);
			}
			this.domNode.addEventListener('scroll', this.scrollHandler);
		}
	};

	ReactiveList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		var _this2 = this;

		var totalPages = Math.ceil(nextProps.total / nextProps.size) || 0;

		if (!(0, _helper.isEqual)(this.props.sortOptions, nextProps.sortOptions) || this.props.sortBy !== nextProps.sortBy || this.props.size !== nextProps.size || !(0, _helper.isEqual)(this.props.dataField, nextProps.dataField) || !(0, _helper.isEqual)(this.props.includeFields, nextProps.includeFields) || !(0, _helper.isEqual)(this.props.excludeFields, nextProps.excludeFields)) {
			var options = (0, _helper.getQueryOptions)(nextProps);
			options.from = this.state.from;
			if (nextProps.sortOptions) {
				var _ref4;

				options.sort = [(_ref4 = {}, _ref4[nextProps.sortOptions[0].dataField] = {
					order: nextProps.sortOptions[0].sortBy
				}, _ref4)];
			} else if (nextProps.sortBy) {
				var _ref5;

				options.sort = [(_ref5 = {}, _ref5[nextProps.dataField] = {
					order: nextProps.sortBy
				}, _ref5)];
			}
			this.props.setQueryOptions(this.props.componentId, options, true);
		}

		if (nextProps.defaultQuery && !(0, _helper.isEqual)(nextProps.defaultQuery(), this.defaultQuery)) {
			var _options = (0, _helper.getQueryOptions)(nextProps);
			_options.from = 0;
			this.defaultQuery = nextProps.defaultQuery();

			var _defaultQuery = this.defaultQuery,
			    sort = _defaultQuery.sort,
			    query = _objectWithoutProperties(_defaultQuery, ['sort']);

			if (sort) {
				_options.sort = this.defaultQuery.sort;
				nextProps.setQueryOptions(nextProps.componentId, _options, !query);
			}

			this.props.updateQuery({
				componentId: this.internalComponent,
				query: query
			}, true);

			// reset page because of query change
			this.setState({
				currentPage: 0,
				from: 0
			}, function () {
				_this2.updatePageURL(0);
			});
		}

		if (this.props.stream !== nextProps.stream) {
			this.props.setStreaming(nextProps.componentId, nextProps.stream);
		}

		if (!(0, _helper.isEqual)(nextProps.react, this.props.react)) {
			this.setReact(nextProps);
		}

		if (this.props.pagination) {
			// called when page is changed
			if (this.props.isLoading && (this.props.hits || nextProps.hits)) {
				if (nextProps.onPageChange) {
					nextProps.onPageChange(this.state.currentPage + 1, totalPages);
				} else {
					this.domNode.scrollTo(0, 0);
				}
			}

			if (this.props.currentPage !== nextProps.currentPage && nextProps.currentPage > 0 && nextProps.currentPage <= totalPages) {
				this.setPage(nextProps.currentPage - 1);
			}
		}

		if (!nextProps.pagination) {
			if (this.props.hits && nextProps.hits) {
				if (this.props.hits.length !== nextProps.hits.length || nextProps.hits.length === nextProps.total) {
					if (nextProps.hits.length < this.props.hits.length) {
						// query has changed
						this.domNode.scrollTo(0, 0);
						this.setState({
							from: 0
						});
					}
				}
			}
		}

		if (nextProps.queryLog && this.props.queryLog && nextProps.queryLog !== this.props.queryLog) {
			// usecase:
			// - query has changed from non-null prev query

			if (nextProps.queryLog.from !== this.state.from) {
				// query's 'from' key doesn't match the state's 'from' key,
				// i.e. this query change was not triggered by the page change (loadMore)
				this.setState({
					currentPage: 0
				}, function () {
					_this2.updatePageURL(0);
				});

				if (nextProps.onPageChange) {
					nextProps.onPageChange(1, totalPages);
				}
			} else if (this.initialFrom && this.initialFrom === nextProps.queryLog.from) {
				// [non-zero] initialFrom matches the current query's from
				// but the query has changed

				// we need to update the query options in this case
				// because the initial load had set the query 'from' in the store
				// which is not valid anymore because the query has changed
				var _options2 = (0, _helper.getQueryOptions)(nextProps);
				_options2.from = 0;
				this.initialFrom = 0;

				if (nextProps.sortOptions) {
					var _ref6;

					_options2.sort = [(_ref6 = {}, _ref6[nextProps.sortOptions[0].dataField] = {
						order: nextProps.sortOptions[0].sortBy
					}, _ref6)];
				} else if (nextProps.sortBy) {
					var _ref7;

					_options2.sort = [(_ref7 = {}, _ref7[nextProps.dataField] = {
						order: nextProps.sortBy
					}, _ref7)];
				}

				this.props.setQueryOptions(this.props.componentId, _options2, true);
			}
		}

		if (nextProps.pagination !== this.props.pagination) {
			if (nextProps.pagination) {
				this.domNode.addEventListener('scroll', this.scrollHandler);
			} else {
				this.domNode.removeEventListener('scroll', this.scrollHandler);
			}
		}

		// handle window url history change (on native back and forth interactions)
		if (this.state.currentPage !== nextProps.defaultPage && this.props.defaultPage !== nextProps.defaultPage) {
			this.setPage(nextProps.defaultPage >= 0 ? nextProps.defaultPage : 0);
		}
	};

	ReactiveList.prototype.componentWillUnmount = function componentWillUnmount() {
		this.props.removeComponent(this.props.componentId);
		this.props.removeComponent(this.internalComponent);

		if (this.domNode) {
			this.domNode.removeEventListener('scroll', this.scrollHandler);
		}
	};

	// only used for SSR


	ReactiveList.prototype.render = function render() {
		var _this3 = this;

		var _props = this.props,
		    onData = _props.onData,
		    size = _props.size;
		var currentPage = this.state.currentPage;

		var results = (0, _helper.parseHits)(this.props.hits) || [];
		var streamResults = (0, _helper.parseHits)(this.props.streamHits) || [];
		var filteredResults = results;

		if (streamResults.length) {
			var ids = streamResults.map(function (item) {
				return item._id;
			});
			filteredResults = filteredResults.filter(function (item) {
				return !ids.includes(item._id);
			});
		}

		return _react2.default.createElement(
			'div',
			{ style: this.props.style, className: this.props.className },
			this.props.isLoading && this.props.pagination && this.props.loader,
			_react2.default.createElement(
				_Flex2.default,
				{
					labelPosition: this.props.sortOptions ? 'right' : 'left',
					className: (0, _helper.getClassName)(this.props.innerClass, 'resultsInfo')
				},
				this.props.sortOptions ? this.renderSortOptions() : null,
				this.props.showResultStats ? this.renderResultStats() : null
			),
			!this.props.isLoading && results.length === 0 && streamResults.length === 0 ? this.renderNoResults() : null,
			this.props.pagination && (this.props.paginationAt === 'top' || this.props.paginationAt === 'both') ? _react2.default.createElement(_Pagination2.default, {
				pages: this.props.pages,
				totalPages: Math.ceil(this.props.total / this.props.size),
				currentPage: this.state.currentPage,
				setPage: this.setPage,
				innerClass: this.props.innerClass,
				fragmentName: this.props.componentId
			}) : null,
			this.props.onAllData ? this.props.onAllData(results, streamResults, this.loadMore, {
				base: currentPage * size,
				triggerClickAnalytics: this.triggerClickAnalytics
			}) : _react2.default.createElement(
				'div',
				{
					className: this.props.listClass + ' ' + (0, _helper.getClassName)(this.props.innerClass, 'list')
				},
				[].concat(streamResults, filteredResults).map(function (item, index) {
					return onData(item, function () {
						return _this3.triggerClickAnalytics(currentPage * size + index);
					});
				})
			),
			this.props.isLoading && !this.props.pagination ? this.props.loader || _react2.default.createElement(
				'div',
				{
					style: {
						textAlign: 'center',
						margin: '20px 0',
						color: '#666'
					}
				},
				'Loading...'
			) // prettier-ignore
			: null,
			this.props.pagination && (this.props.paginationAt === 'bottom' || this.props.paginationAt === 'both') ? _react2.default.createElement(_Pagination2.default, {
				pages: this.props.pages,
				totalPages: Math.ceil(this.props.total / this.props.size),
				currentPage: this.state.currentPage,
				setPage: this.setPage,
				innerClass: this.props.innerClass,
				fragmentName: this.props.componentId
			}) : null,
			this.props.config.url.endsWith('appbase.io') && results.length ? _react2.default.createElement(
				_Flex2.default,
				{
					direction: 'row-reverse',
					className: (0, _helper.getClassName)(this.props.innerClass, 'poweredBy')
				},
				_react2.default.createElement(_PoweredBy2.default, null)
			) : null
		);
	};

	return ReactiveList;
}(_react.Component);

ReactiveList.generateQueryOptions = function (props) {
	// simulate default (includeFields and excludeFields) props to generate consistent query
	var options = (0, _helper.getQueryOptions)(_extends({ includeFields: ['*'], excludeFields: [] }, props));
	options.from = props.currentPage ? (props.currentPage - 1) * (props.size || 10) : 0;
	options.size = props.size || 10;

	if (props.sortOptions) {
		var _ref8;

		options.sort = [(_ref8 = {}, _ref8[props.sortOptions[0].dataField] = {
			order: props.sortOptions[0].sortBy
		}, _ref8)];
	} else if (props.sortBy) {
		var _ref9;

		options.sort = [(_ref9 = {}, _ref9[props.dataField] = {
			order: props.sortBy
		}, _ref9)];
	}

	return options;
};

var _initialiseProps = function _initialiseProps() {
	var _this4 = this;

	this.setReact = function (props) {
		var react = props.react;

		if (react) {
			var newReact = (0, _helper.pushToAndClause)(react, _this4.internalComponent);
			props.watchComponent(props.componentId, newReact);
		} else {
			props.watchComponent(props.componentId, {
				and: _this4.internalComponent
			});
		}
	};

	this.scrollHandler = function () {
		var renderLoader = window.innerHeight + window.pageYOffset + 300 >= document.body.offsetHeight;
		if (_this4.props.scrollTarget) {
			renderLoader = _this4.domNode.clientHeight + _this4.domNode.scrollTop + 300 >= _this4.domNode.scrollHeight;
		}
		if (!_this4.props.isLoading && renderLoader) {
			_this4.loadMore();
		}
	};

	this.loadMore = function () {
		if (_this4.props.hits && !_this4.props.pagination && _this4.props.total !== _this4.props.hits.length) {
			var value = _this4.state.from + _this4.props.size;
			var options = (0, _helper.getQueryOptions)(_this4.props);

			_this4.setState({
				from: value
			});
			_this4.props.loadMore(_this4.props.componentId, _extends({}, options, {
				from: value
			}), true);
		}
	};

	this.setPage = function (page) {
		// onPageClick will be called everytime a pagination button is clicked
		if (page !== _this4.state.currentPage) {
			var onPageClick = _this4.props.onPageClick;

			if (onPageClick) {
				onPageClick(page + 1);
			}
			var value = _this4.props.size * page;
			var options = (0, _helper.getQueryOptions)(_this4.props);
			options.from = _this4.state.from;
			_this4.setState({
				from: value,
				currentPage: page
			}, function () {
				_this4.props.loadMore(_this4.props.componentId, _extends({}, options, {
					from: value
				}), false);

				_this4.updatePageURL(page);
			});
		}
	};

	this.renderResultStats = function () {
		if (_this4.props.onResultStats && _this4.props.total) {
			return _this4.props.onResultStats(_this4.props.total, _this4.props.time);
		} else if (_this4.props.total) {
			return _react2.default.createElement(
				'p',
				{
					className: _results.resultStats + ' ' + (0, _helper.getClassName)(_this4.props.innerClass, 'resultStats')
				},
				_this4.props.total,
				' results found in ',
				_this4.props.time,
				'ms'
			);
		}
		return null;
	};

	this.renderNoResults = function () {
		return _react2.default.createElement(
			'p',
			{ className: (0, _helper.getClassName)(_this4.props.innerClass, 'noResults') || null },
			_this4.props.onNoResults
		);
	};

	this.handleSortChange = function (e) {
		var _ref10;

		var index = e.target.value;
		var options = (0, _helper.getQueryOptions)(_this4.props);
		// This fixes issue #371 (where sorting a multi-result page with infinite loader breaks)
		options.from = 0;

		options.sort = [(_ref10 = {}, _ref10[_this4.props.sortOptions[index].dataField] = {
			order: _this4.props.sortOptions[index].sortBy
		}, _ref10)];
		_this4.props.setQueryOptions(_this4.props.componentId, options, true);

		_this4.setState({
			currentPage: 0,
			from: 0
		}, function () {
			_this4.updatePageURL(0);
		});
	};

	this.updatePageURL = function (page) {
		if (_this4.props.URLParams) {
			_this4.props.setPageURL(_this4.props.componentId, page + 1, _this4.props.componentId, false, true);
		}
	};

	this.triggerClickAnalytics = function (searchPosition) {
		// click analytics would only work client side and after javascript loads
		var _props2 = _this4.props,
		    config = _props2.config,
		    searchId = _props2.analytics.searchId;
		var url = config.url,
		    app = config.app,
		    credentials = config.credentials;

		if (config.analytics && url.endsWith('scalr.api.appbase.io') && searchId) {
			fetch(url + '/' + app + '/analytics', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Basic ' + btoa(credentials),
					'X-Search-Id': searchId,
					'X-Search-Click': true,
					'X-Search-Click-Position': searchPosition + 1
				}
			});
		}
	};

	this.renderSortOptions = function () {
		return _react2.default.createElement(
			'select',
			{
				className: _results.sortOptions + ' ' + (0, _helper.getClassName)(_this4.props.innerClass, 'sortOptions'),
				name: 'sort-options',
				onChange: _this4.handleSortChange
			},
			_this4.props.sortOptions.map(function (sort, index) {
				return _react2.default.createElement(
					'option',
					{ key: sort.label, value: index },
					sort.label
				);
			})
		);
	};
};

ReactiveList.propTypes = {
	addComponent: _types2.default.funcRequired,
	loadMore: _types2.default.funcRequired,
	removeComponent: _types2.default.funcRequired,
	setQueryListener: _types2.default.funcRequired,
	onQueryChange: _types2.default.func,
	onError: _types2.default.func,
	setPageURL: _types2.default.func,
	setQueryOptions: _types2.default.funcRequired,
	setStreaming: _types2.default.func,
	updateQuery: _types2.default.funcRequired,
	watchComponent: _types2.default.funcRequired,
	currentPage: _types2.default.number,
	hits: _types2.default.hits,
	isLoading: _types2.default.bool,
	includeFields: _types2.default.includeFields,
	streamHits: _types2.default.hits,
	time: _types2.default.number,
	total: _types2.default.number,
	config: _types2.default.props,
	analytics: _types2.default.props,
	queryLog: _types2.default.props,
	// component props
	className: _types2.default.string,
	componentId: _types2.default.stringRequired,
	dataField: _types2.default.stringRequired,
	defaultPage: _types2.default.number,
	defaultQuery: _types2.default.func,
	excludeFields: _types2.default.excludeFields,
	innerClass: _types2.default.style,
	listClass: _types2.default.string,
	loader: _types2.default.title,
	onAllData: _types2.default.func,
	onData: _types2.default.func,
	onNoResults: _types2.default.title,
	onPageChange: _types2.default.func,
	onPageClick: _types2.default.func,
	onResultStats: _types2.default.func,
	pages: _types2.default.number,
	pagination: _types2.default.bool,
	paginationAt: _types2.default.paginationAt,
	react: _types2.default.react,
	scrollTarget: _types2.default.string,
	showResultStats: _types2.default.bool,
	size: _types2.default.number,
	sortBy: _types2.default.sortBy,
	sortOptions: _types2.default.sortOptions,
	stream: _types2.default.bool,
	style: _types2.default.style,
	URLParams: _types2.default.bool
};

ReactiveList.defaultProps = {
	className: null,
	currentPage: 0,
	listClass: '',
	pages: 5,
	pagination: false,
	paginationAt: 'bottom',
	includeFields: ['*'],
	excludeFields: [],
	showResultStats: true,
	size: 10,
	style: {},
	URLParams: false,
	onNoResults: 'No Results found.'
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		defaultPage: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value - 1 || -1,
		hits: state.hits[props.componentId] && state.hits[props.componentId].hits,
		isLoading: state.isLoading[props.componentId] || false,
		streamHits: state.streamHits[props.componentId],
		time: state.hits[props.componentId] && state.hits[props.componentId].time || 0,
		total: state.hits[props.componentId] && state.hits[props.componentId].total,
		analytics: state.analytics,
		config: state.config,
		queryLog: state.queryLog[props.componentId]
	};
};

var mapDispatchtoProps = function mapDispatchtoProps(dispatch) {
	return {
		addComponent: function addComponent(component) {
			return dispatch((0, _actions.addComponent)(component));
		},
		loadMore: function loadMore(component, options, append) {
			return dispatch((0, _actions.loadMore)(component, options, append));
		},
		removeComponent: function removeComponent(component) {
			return dispatch((0, _actions.removeComponent)(component));
		},
		setPageURL: function setPageURL(component, value, label, showFilter, URLParams) {
			return dispatch((0, _actions.setValue)(component, value, label, showFilter, URLParams));
		},
		setQueryOptions: function setQueryOptions(component, props, execute) {
			return dispatch((0, _actions.setQueryOptions)(component, props, execute));
		},
		setQueryListener: function setQueryListener(component, onQueryChange, beforeQueryChange) {
			return dispatch((0, _actions.setQueryListener)(component, onQueryChange, beforeQueryChange));
		},
		setStreaming: function setStreaming(component, stream) {
			return dispatch((0, _actions.setStreaming)(component, stream));
		},
		updateQuery: function updateQuery(updateQueryObject, execute) {
			return dispatch((0, _actions.updateQuery)(updateQueryObject, execute));
		},
		watchComponent: function watchComponent(component, react) {
			return dispatch((0, _actions.watchComponent)(component, react));
		}
	};
};

exports.default = (0, _utils.connect)(mapStateToProps, mapDispatchtoProps)(ReactiveList);

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/result/ResultCard.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _ReactiveList = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/result/ReactiveList.js");

var _ReactiveList2 = _interopRequireDefault(_ReactiveList);

var _Title = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Title.js");

var _Title2 = _interopRequireDefault(_Title);

var _Card = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Card.js");

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultCard = function (_Component) {
	_inherits(ResultCard, _Component);

	function ResultCard() {
		var _temp, _this, _ret;

		_classCallCheck(this, ResultCard);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.renderAsCard = function (item, triggerClickAnalytics) {
			var result = _this.props.onData(item);

			if (result) {
				return _react2.default.createElement(
					_Card2.default,
					_extends({
						key: item._id,
						href: result.url,
						className: (0, _helper.getClassName)(_this.props.innerClass, 'listItem'),
						target: _this.props.target,
						rel: _this.props.target === '_blank' ? 'noopener noreferrer' : null,
						onClick: triggerClickAnalytics
					}, result.containerProps),
					result.image ? _react2.default.createElement(_Card.Image, {
						style: { backgroundImage: 'url(' + result.image + ')' },
						className: (0, _helper.getClassName)(_this.props.innerClass, 'image')
					}) : null,
					result.title && (typeof result.title === 'string' ? _react2.default.createElement(_Title2.default, {
						dangerouslySetInnerHTML: { __html: result.title },
						className: (0, _helper.getClassName)(_this.props.innerClass, 'title')
					}) : _react2.default.createElement(
						_Title2.default,
						{ className: (0, _helper.getClassName)(_this.props.innerClass, 'title') },
						result.title
					)),
					result.description && (typeof result.description === 'string' ? _react2.default.createElement('article', {
						dangerouslySetInnerHTML: {
							__html: result.description
						}
					}) : _react2.default.createElement(
						'article',
						null,
						result.description
					))
				);
			}

			return null;
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	ResultCard.prototype.render = function render() {
		var _props = this.props,
		    onData = _props.onData,
		    props = _objectWithoutProperties(_props, ['onData']);

		return _react2.default.createElement(_ReactiveList2.default, _extends({}, props, { onData: this.renderAsCard, listClass: _Card.container }));
	};

	return ResultCard;
}(_react.Component);

ResultCard.generateQueryOptions = function (props) {
	return _ReactiveList2.default.generateQueryOptions(props);
};

ResultCard.propTypes = {
	innerClass: _types2.default.style,
	target: _types2.default.stringRequired,
	onData: _types2.default.func
};

ResultCard.defaultProps = {
	target: '_blank'
};

exports.default = ResultCard;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/result/addons/Pagination.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Pagination;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _Button = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Button.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStartPage(totalPages, currentPage) {
	var midValue = parseInt(totalPages / 2, 10);
	var start = currentPage - midValue;
	return start > 1 ? start : 2;
}

function Pagination(props) {
	var start = getStartPage(props.pages, props.currentPage);
	var pages = [];

	var onPrevPage = function onPrevPage(e) {
		e.preventDefault();
		if (props.currentPage) {
			props.setPage(props.currentPage - 1);
		}
	};

	var onNextPage = function onNextPage(e) {
		e.preventDefault();
		if (props.currentPage < props.totalPages - 1) {
			props.setPage(props.currentPage + 1);
		}
	};

	if (start <= props.totalPages) {
		var totalPagesToShow = props.pages < props.totalPages ? start + (props.pages - 1) : props.totalPages + 1;

		var _loop = function _loop(i) {
			var primary = props.currentPage === i - 1;
			var innerClassName = (0, _helper.getClassName)(props.innerClass, 'button');
			var className = innerClassName || primary ? innerClassName + ' ' + (primary ? 'active' : '') : null;
			var pageBtn = _react2.default.createElement(
				_Button2.default,
				{
					className: className,
					primary: primary,
					key: i - 1,
					tabIndex: '0',
					onKeyPress: function onKeyPress(event) {
						return (0, _helper.handleA11yAction)(event, function () {
							return props.setPage(i - 1);
						});
					},
					onClick: function onClick(e) {
						e.preventDefault();
						props.setPage(i - 1);
					},
					href: '?' + props.fragmentName + '=' + i
				},
				i
			);
			if (i <= props.totalPages + 1) {
				pages.push(pageBtn);
			}
		};

		for (var i = start; i < totalPagesToShow; i += 1) {
			_loop(i);
		}
	}

	if (!props.totalPages) {
		return null;
	}

	var innerClassName = (0, _helper.getClassName)(props.innerClass, 'button');
	var primary = props.currentPage === 0;
	var className = innerClassName || primary ? innerClassName + ' ' + (primary ? 'active' : '') : null;

	var prevHrefProp = {};
	var nextHrefProp = {};

	if (props.currentPage >= 1) {
		prevHrefProp = {
			href: '?' + props.fragmentName + '=' + props.currentPage,
			rel: 'prev'
		};
	}

	if (props.currentPage < props.totalPages - 1) {
		nextHrefProp = {
			href: '?' + props.fragmentName + '=' + (props.currentPage + 2),
			rel: 'next'
		};
	}

	return _react2.default.createElement(
		'div',
		{ className: _Button.pagination + ' ' + (0, _helper.getClassName)(props.innerClass, 'pagination') },
		_react2.default.createElement(
			_Button2.default,
			_extends({
				className: (0, _helper.getClassName)(props.innerClass, 'button') || null,
				disabled: props.currentPage === 0,
				onKeyPress: function onKeyPress(event) {
					return (0, _helper.handleA11yAction)(event, onPrevPage);
				},
				onClick: onPrevPage,
				tabIndex: '0'
			}, prevHrefProp),
			'Prev'
		),
		_react2.default.createElement(
			_Button2.default,
			{
				className: className,
				primary: primary,
				onKeyPress: function onKeyPress(event) {
					return (0, _helper.handleA11yAction)(event, function () {
						return props.setPage(0);
					});
				},
				onClick: function onClick(e) {
					e.preventDefault();
					props.setPage(0);
				},
				tabIndex: '0',
				href: '?' + props.fragmentName + '=1'
			},
			'1'
		),
		props.currentPage >= props.pages ? _react2.default.createElement(
			'span',
			null,
			'...'
		) : null,
		pages,
		_react2.default.createElement(
			_Button2.default,
			_extends({
				className: (0, _helper.getClassName)(props.innerClass, 'button') || null,
				disabled: props.currentPage >= props.totalPages - 1,
				onKeyPress: function onKeyPress(event) {
					return (0, _helper.handleA11yAction)(event, onNextPage);
				},
				onClick: onNextPage,
				tabIndex: '0'
			}, nextHrefProp),
			'Next'
		)
	);
}

Pagination.propTypes = {
	currentPage: _types2.default.number,
	innerClass: _types2.default.style,
	pages: _types2.default.number,
	setPage: _types2.default.func,
	totalPages: _types2.default.number,
	fragmentName: _types2.default.string
};

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/result/addons/PoweredBy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _PoweredByImage = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/PoweredByImage.js");

var _PoweredByImage2 = _interopRequireDefault(_PoweredByImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PoweredBy = function PoweredBy() {
	return _react2.default.createElement(
		'a',
		{ href: 'https://appbase.io/', target: '_blank', rel: 'noopener noreferrer' },
		_react2.default.createElement(_PoweredByImage2.default, { src: 'https://cdn.jsdelivr.net/gh/appbaseio/cdn@d2ec210045e59104ee5485841fa17b23fc83f097/appbase/logos/rbc-logo.svg' })
	);
};

exports.default = PoweredBy;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/search/DataSearch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _downshift = __webpack_require__("./node_modules/downshift/dist/downshift.esm.js");

var _downshift2 = _interopRequireDefault(_downshift);

var _emotionTheming = __webpack_require__("./node_modules/emotion-theming/dist/index.esm.js");

var _actions = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/actions/index.js");

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

var _suggestions = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/suggestions.js");

var _suggestions2 = _interopRequireDefault(_suggestions);

var _causes = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/causes.js");

var _causes2 = _interopRequireDefault(_causes);

var _Title = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Title.js");

var _Title2 = _interopRequireDefault(_Title);

var _Input = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _SearchSvg = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/shared/SearchSvg.js");

var _SearchSvg2 = _interopRequireDefault(_SearchSvg);

var _CancelSvg = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/shared/CancelSvg.js");

var _CancelSvg2 = _interopRequireDefault(_CancelSvg);

var _InputIcon = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/InputIcon.js");

var _InputIcon2 = _interopRequireDefault(_InputIcon);

var _Container = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _utils = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataSearch = function (_Component) {
	_inherits(DataSearch, _Component);

	function DataSearch(props) {
		_classCallCheck(this, DataSearch);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_initialiseProps.call(_this);

		_this.state = {
			currentValue: '',
			suggestions: [],
			isOpen: false
		};
		_this.internalComponent = props.componentId + '__internal';
		_this.locked = false;
		props.setQueryListener(props.componentId, props.onQueryChange, null);
		return _this;
	}

	DataSearch.prototype.componentWillMount = function componentWillMount() {
		this.props.addComponent(this.props.componentId, 'DATASEARCH');
		this.props.addComponent(this.internalComponent);

		if (this.props.highlight) {
			var queryOptions = DataSearch.highlightQuery(this.props) || {};
			queryOptions.size = 20;
			this.props.setQueryOptions(this.props.componentId, queryOptions);
		} else {
			this.props.setQueryOptions(this.props.componentId, {
				size: 20
			});
		}
		this.setReact(this.props);

		if (this.props.selectedValue) {
			this.setValue(this.props.selectedValue, true);
		} else if (this.props.defaultSelected) {
			this.setValue(this.props.defaultSelected, true);
		}
	};

	DataSearch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		var _this2 = this;

		(0, _helper.checkSomePropChange)(this.props, nextProps, ['highlight', 'dataField', 'highlightField'], function () {
			var queryOptions = DataSearch.highlightQuery(nextProps) || {};
			queryOptions.size = 20;
			_this2.props.setQueryOptions(nextProps.componentId, queryOptions);
		});

		(0, _helper.checkPropChange)(this.props.react, nextProps.react, function () {
			return _this2.setReact(nextProps);
		});

		if (Array.isArray(nextProps.suggestions) && this.state.currentValue.trim().length) {
			// shallow check allows us to set suggestions even if the next set
			// of suggestions are same as the current one
			if (this.props.suggestions !== nextProps.suggestions) {
				this.setState({
					suggestions: this.onSuggestions(nextProps.suggestions)
				});
			}
		}

		(0, _helper.checkSomePropChange)(this.props, nextProps, ['fieldWeights', 'fuzziness', 'queryFormat', 'dataField', 'nestedField'], function () {
			_this2.updateQuery(nextProps.componentId, _this2.state.currentValue, nextProps);
		});

		if (this.props.defaultSelected !== nextProps.defaultSelected) {
			this.setValue(nextProps.defaultSelected, true, nextProps);
		} else if (
		// since, selectedValue will be updated when currentValue changes,
		// we must only check for the changes introduced by
		// clear action from SelectedFilters component in which case,
		// the currentValue will never match the updated selectedValue
		this.props.selectedValue !== nextProps.selectedValue && this.state.currentValue !== nextProps.selectedValue) {
			this.setValue(nextProps.selectedValue || '', true, nextProps);
		}
	};

	DataSearch.prototype.componentWillUnmount = function componentWillUnmount() {
		this.props.removeComponent(this.props.componentId);
		this.props.removeComponent(this.internalComponent);
	};

	DataSearch.prototype.render = function render() {
		var _this3 = this;

		var suggestionsList = [];

		if (!this.state.currentValue && this.props.defaultSuggestions && this.props.defaultSuggestions.length) {
			suggestionsList = this.props.defaultSuggestions;
		} else if (this.state.currentValue) {
			suggestionsList = this.state.suggestions;
		}

		var _props = this.props,
		    theme = _props.theme,
		    themePreset = _props.themePreset,
		    renderSuggestions = _props.renderSuggestions;

		return _react2.default.createElement(
			_Container2.default,
			{ style: this.props.style, className: this.props.className },
			this.props.title && _react2.default.createElement(
				_Title2.default,
				{ className: (0, _helper.getClassName)(this.props.innerClass, 'title') || null },
				this.props.title
			),
			this.props.defaultSuggestions || this.props.autosuggest ? _react2.default.createElement(_downshift2.default, _extends({
				id: this.props.componentId + '-downshift',
				onChange: this.onSuggestionSelected,
				onStateChange: this.handleStateChange,
				isOpen: this.state.isOpen,
				itemToString: function itemToString(i) {
					return i;
				},
				render: function render(_ref) {
					var getInputProps = _ref.getInputProps,
					    getItemProps = _ref.getItemProps,
					    isOpen = _ref.isOpen,
					    highlightedIndex = _ref.highlightedIndex;
					return _react2.default.createElement(
						'div',
						{ className: _Input.suggestionsContainer },
						_react2.default.createElement(_Input2.default, _extends({
							id: _this3.props.componentId + '-input',
							showIcon: _this3.props.showIcon,
							showClear: _this3.props.showClear,
							iconPosition: _this3.props.iconPosition,
							innerRef: _this3.props.innerRef
						}, getInputProps({
							className: (0, _helper.getClassName)(_this3.props.innerClass, 'input'),
							placeholder: _this3.props.placeholder,
							value: _this3.state.currentValue === null ? '' : _this3.state.currentValue,
							onChange: _this3.onInputChange,
							onBlur: _this3.props.onBlur,
							onFocus: _this3.handleFocus,
							onKeyPress: _this3.props.onKeyPress,
							onKeyDown: function onKeyDown(e) {
								return _this3.handleKeyDown(e, highlightedIndex);
							},
							onKeyUp: _this3.props.onKeyUp
						}), {
							themePreset: themePreset
						})),
						_this3.renderIcons(),
						renderSuggestions && renderSuggestions({
							currentValue: _this3.state.currentValue,
							isOpen: isOpen,
							getItemProps: getItemProps,
							highlightedIndex: highlightedIndex,
							suggestions: _this3.props.suggestions,
							parsedSuggestions: suggestionsList
						}),
						_this3.renderLoader(),
						!renderSuggestions && isOpen && suggestionsList.length ? _react2.default.createElement(
							'ul',
							{
								className: (0, _Input.suggestions)(themePreset, theme) + ' ' + (0, _helper.getClassName)(_this3.props.innerClass, 'list')
							},
							suggestionsList.slice(0, 10).map(function (item, index) {
								return _react2.default.createElement(
									'li',
									_extends({}, getItemProps({ item: item }), {
										key: index + 1 + '-' + item.value,
										style: {
											backgroundColor: _this3.getBackgroundColor(highlightedIndex, index)
										}
									}),
									typeof item.label === 'string' ? _react2.default.createElement('div', {
										className: 'trim',
										dangerouslySetInnerHTML: {
											__html: item.label
										}
									}) : item.label
								);
							})
						) : null
					);
				}
			}, this.props.downShiftProps)) : _react2.default.createElement(
				'div',
				{ className: _Input.suggestionsContainer },
				_react2.default.createElement(_Input2.default, {
					className: (0, _helper.getClassName)(this.props.innerClass, 'input') || null,
					placeholder: this.props.placeholder,
					value: this.state.currentValue ? this.state.currentValue : '',
					onChange: this.onInputChange,
					onBlur: this.props.onBlur,
					onFocus: this.props.onFocus,
					onKeyPress: this.props.onKeyPress,
					onKeyDown: this.props.onKeyDown,
					onKeyUp: this.props.onKeyUp,
					autoFocus: this.props.autoFocus,
					iconPosition: this.props.iconPosition,
					showIcon: this.props.showIcon,
					showClear: this.props.showClear,
					innerRef: this.props.innerRef,
					themePreset: themePreset
				}),
				this.renderIcons()
			)
		);
	};

	return DataSearch;
}(_react.Component);

DataSearch.highlightQuery = function (props) {
	if (props.customHighlight) {
		return props.customHighlight(props);
	}
	if (!props.highlight) {
		return null;
	}
	var fields = {};
	var highlightField = props.highlightField ? props.highlightField : props.dataField;

	if (typeof highlightField === 'string') {
		fields[highlightField] = {};
	} else if (Array.isArray(highlightField)) {
		highlightField.forEach(function (item) {
			fields[item] = {};
		});
	}

	return {
		highlight: {
			pre_tags: ['<mark>'],
			post_tags: ['</mark>'],
			fields: fields
		}
	};
};

DataSearch.defaultQuery = function (value, props) {
	var finalQuery = null;
	var fields = void 0;

	if (value) {
		if (Array.isArray(props.dataField)) {
			fields = props.dataField;
		} else {
			fields = [props.dataField];
		}
		finalQuery = {
			bool: {
				should: DataSearch.shouldQuery(value, fields, props),
				minimum_should_match: '1'
			}
		};
	}

	if (value === '') {
		finalQuery = {
			match_all: {}
		};
	}

	if (finalQuery && props.nestedField) {
		finalQuery = {
			nested: {
				path: props.nestedField,
				query: finalQuery
			}
		};
	}

	return finalQuery;
};

DataSearch.shouldQuery = function (value, dataFields, props) {
	var fields = dataFields.map(function (field, index) {
		return '' + field + (Array.isArray(props.fieldWeights) && props.fieldWeights[index] ? '^' + props.fieldWeights[index] : '');
	});

	if (props.queryFormat === 'and') {
		return [{
			multi_match: {
				query: value,
				fields: fields,
				type: 'cross_fields',
				operator: 'and'
			}
		}, {
			multi_match: {
				query: value,
				fields: fields,
				type: 'phrase_prefix',
				operator: 'and'
			}
		}];
	}

	return [{
		multi_match: {
			query: value,
			fields: fields,
			type: 'best_fields',
			operator: 'or',
			fuzziness: props.fuzziness ? props.fuzziness : 0
		}
	}, {
		multi_match: {
			query: value,
			fields: fields,
			type: 'phrase_prefix',
			operator: 'or'
		}
	}];
};

var _initialiseProps = function _initialiseProps() {
	var _this4 = this;

	this.setReact = function (props) {
		var react = props.react;

		if (react) {
			var newReact = (0, _helper.pushToAndClause)(react, _this4.internalComponent);
			props.watchComponent(props.componentId, newReact);
		} else {
			props.watchComponent(props.componentId, {
				and: _this4.internalComponent
			});
		}
	};

	this.onSuggestions = function (results) {
		if (_this4.props.onSuggestion) {
			return results.map(function (suggestion) {
				return _this4.props.onSuggestion(suggestion);
			});
		}

		var fields = Array.isArray(_this4.props.dataField) ? _this4.props.dataField : [_this4.props.dataField];

		return (0, _suggestions2.default)(fields, results, _this4.state.currentValue.toLowerCase());
	};

	this.setValue = function (value) {
		var isDefaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this4.props;
		var cause = arguments[3];

		// ignore state updates when component is locked
		if (props.beforeValueChange && _this4.locked) {
			return;
		}

		_this4.locked = true;
		var performUpdate = function performUpdate() {
			_this4.setState({
				currentValue: value,
				suggestions: []
			}, function () {
				if (isDefaultValue) {
					if (_this4.props.autosuggest) {
						_this4.setState({
							isOpen: false
						});
						_this4.updateQuery(_this4.internalComponent, value, props);
					}
					// in case of strict selection only SUGGESTION_SELECT should be able
					// to set the query otherwise the value should reset
					if (props.strictSelection) {
						if (cause === _causes2.default.SUGGESTION_SELECT || value === '') {
							_this4.updateQuery(props.componentId, value, props);
						} else {
							_this4.setValue('', true);
						}
					} else {
						_this4.updateQuery(props.componentId, value, props);
					}
				} else {
					// debounce for handling text while typing
					_this4.handleTextChange(value);
				}
				_this4.locked = false;
				if (props.onValueChange) props.onValueChange(value);
			});
		};
		(0, _helper.checkValueChange)(props.componentId, value, props.beforeValueChange, performUpdate);
	};

	this.handleTextChange = (0, _helper.debounce)(function (value) {
		if (_this4.props.autosuggest) {
			_this4.updateQuery(_this4.internalComponent, value, _this4.props);
		} else {
			_this4.updateQuery(_this4.props.componentId, value, _this4.props);
		}
	}, this.props.debounce);

	this.updateQuery = function (componentId, value, props) {
		var customQuery = props.customQuery,
		    defaultQuery = props.defaultQuery,
		    filterLabel = props.filterLabel,
		    showFilter = props.showFilter,
		    URLParams = props.URLParams;

		// defaultQuery from props is always appended
		// regardless of a customQuery

		var query = customQuery || DataSearch.defaultQuery;
		var queryObject = defaultQuery ? {
			bool: {
				must: [].concat(query(value, props), defaultQuery(value, props))
			} // prettier-ignore
		} : query(value, props);

		props.updateQuery({
			componentId: componentId,
			query: queryObject,
			value: value,
			label: filterLabel,
			showFilter: showFilter,
			URLParams: URLParams,
			componentType: 'DATASEARCH'
		});
	};

	this.handleFocus = function (event) {
		_this4.setState({
			isOpen: true
		});
		if (_this4.props.onFocus) {
			_this4.props.onFocus(event);
		}
	};

	this.clearValue = function () {
		_this4.setValue('', true);
		_this4.onValueSelected(null, _causes2.default.CLEAR_VALUE);
	};

	this.handleKeyDown = function (event, highlightedIndex) {
		// if a suggestion was selected, delegate the handling
		// to suggestion handler
		if (event.key === 'Enter' && highlightedIndex === null) {
			_this4.setValue(event.target.value, true);
			_this4.onValueSelected(event.target.value, _causes2.default.ENTER_PRESS);
		}
		if (_this4.props.onKeyDown) {
			_this4.props.onKeyDown(event);
		}
	};

	this.onInputChange = function (e) {
		var value = e.target.value;

		if (!_this4.state.isOpen) {
			_this4.setState({
				isOpen: true
			});
		}
		_this4.setValue(value);
	};

	this.onSuggestionSelected = function (suggestion) {
		_this4.setValue(suggestion.value, true, _this4.props, _causes2.default.SUGGESTION_SELECT);
		_this4.onValueSelected(suggestion.value, _causes2.default.SUGGESTION_SELECT, suggestion.source);
	};

	this.onValueSelected = function () {
		for (var _len = arguments.length, cause = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			cause[_key - 1] = arguments[_key];
		}

		var currentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.state.currentValue;
		var onValueSelected = _this4.props.onValueSelected;

		if (onValueSelected) {
			onValueSelected.apply(undefined, [currentValue].concat(cause));
		}
	};

	this.handleStateChange = function (changes) {
		var isOpen = changes.isOpen,
		    type = changes.type;

		if (type === _downshift2.default.stateChangeTypes.mouseUp) {
			_this4.setState({
				isOpen: isOpen
			});
		}
	};

	this.getBackgroundColor = function (highlightedIndex, index) {
		var isDark = _this4.props.themePreset === 'dark';
		if (isDark) {
			return highlightedIndex === index ? '#555' : '#424242';
		}
		return highlightedIndex === index ? '#eee' : '#fff';
	};

	this.handleSearchIconClick = function () {
		var currentValue = _this4.state.currentValue;

		if (currentValue.trim()) {
			_this4.setValue(currentValue, true);
		}
	};

	this.renderIcon = function () {
		if (_this4.props.showIcon) {
			return _this4.props.icon || _react2.default.createElement(_SearchSvg2.default, null);
		}
		return null;
	};

	this.renderCancelIcon = function () {
		if (_this4.props.showClear) {
			return _this4.props.clearIcon || _react2.default.createElement(_CancelSvg2.default, null);
		}
		return null;
	};

	this.renderIcons = function () {
		return _react2.default.createElement(
			'div',
			null,
			_this4.state.currentValue && _this4.props.showClear && _react2.default.createElement(
				_InputIcon2.default,
				{
					onClick: _this4.clearValue,
					iconPosition: 'right',
					clearIcon: _this4.props.iconPosition === 'right'
				},
				_this4.renderCancelIcon()
			),
			_react2.default.createElement(
				_InputIcon2.default,
				{
					onClick: _this4.handleSearchIconClick,
					iconPosition: _this4.props.iconPosition
				},
				_this4.renderIcon()
			)
		);
	};

	this.renderLoader = function () {
		var _props2 = _this4.props,
		    loader = _props2.loader,
		    isLoading = _props2.isLoading,
		    themePreset = _props2.themePreset,
		    theme = _props2.theme;
		var currentValue = _this4.state.currentValue;

		if (isLoading && loader && currentValue) {
			return _react2.default.createElement(
				'div',
				{ className: (0, _Input.noSuggestions)(themePreset, theme) + ' ' + (0, _helper.getClassName)(_this4.props.innerClass, 'no-suggestion')
				},
				_react2.default.createElement(
					'li',
					null,
					loader
				)
			);
		}
		return null;
	};
};

DataSearch.propTypes = {
	addComponent: _types2.default.funcRequired,
	removeComponent: _types2.default.funcRequired,
	setQueryListener: _types2.default.funcRequired,
	setQueryOptions: _types2.default.funcRequired,
	updateQuery: _types2.default.funcRequired,
	watchComponent: _types2.default.funcRequired,
	options: _types2.default.options,
	selectedValue: _types2.default.selectedValue,
	suggestions: _types2.default.suggestions,
	// component props
	autoFocus: _types2.default.bool,
	autosuggest: _types2.default.bool,
	beforeValueChange: _types2.default.func,
	className: _types2.default.string,
	clearIcon: _types2.default.children,
	componentId: _types2.default.stringRequired,
	customHighlight: _types2.default.func,
	customQuery: _types2.default.func,
	dataField: _types2.default.dataFieldArray,
	debounce: _types2.default.number,
	defaultSelected: _types2.default.string,
	defaultSuggestions: _types2.default.suggestions,
	downShiftProps: _types2.default.props,
	fieldWeights: _types2.default.fieldWeights,
	filterLabel: _types2.default.string,
	fuzziness: _types2.default.fuzziness,
	highlight: _types2.default.bool,
	highlightField: _types2.default.stringOrArray,
	icon: _types2.default.children,
	iconPosition: _types2.default.iconPosition,
	innerClass: _types2.default.style,
	innerRef: _types2.default.func,
	isLoading: _types2.default.bool,
	loader: _types2.default.title,
	onBlur: _types2.default.func,
	onFocus: _types2.default.func,
	onKeyDown: _types2.default.func,
	onKeyPress: _types2.default.func,
	onKeyUp: _types2.default.func,
	onQueryChange: _types2.default.func,
	onSuggestion: _types2.default.func,
	onValueChange: _types2.default.func,
	onValueSelected: _types2.default.func,
	placeholder: _types2.default.string,
	queryFormat: _types2.default.queryFormatSearch,
	react: _types2.default.react,
	renderSuggestions: _types2.default.func,
	showClear: _types2.default.bool,
	showFilter: _types2.default.bool,
	showIcon: _types2.default.bool,
	style: _types2.default.style,
	title: _types2.default.title,
	theme: _types2.default.style,
	themePreset: _types2.default.themePreset,
	URLParams: _types2.default.bool,
	strictSelection: _types2.default.bool
};

DataSearch.defaultProps = {
	autosuggest: true,
	className: null,
	debounce: 0,
	downShiftProps: {},
	iconPosition: 'left',
	placeholder: 'Search',
	queryFormat: 'or',
	showFilter: true,
	showIcon: true,
	style: {},
	URLParams: false,
	showClear: false,
	strictSelection: false
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || null,
		suggestions: state.hits[props.componentId] && state.hits[props.componentId].hits,
		themePreset: state.config.themePreset,
		isLoading: state.isLoading[props.componentId]
	};
};

var mapDispatchtoProps = function mapDispatchtoProps(dispatch) {
	return {
		addComponent: function addComponent(component, name) {
			return dispatch((0, _actions.addComponent)(component, name));
		},
		removeComponent: function removeComponent(component) {
			return dispatch((0, _actions.removeComponent)(component));
		},
		setQueryOptions: function setQueryOptions(component, props) {
			return dispatch((0, _actions.setQueryOptions)(component, props));
		},
		updateQuery: function updateQuery(updateQueryObject) {
			return dispatch((0, _actions.updateQuery)(updateQueryObject));
		},
		watchComponent: function watchComponent(component, react) {
			return dispatch((0, _actions.watchComponent)(component, react));
		},
		setQueryListener: function setQueryListener(component, onQueryChange, beforeQueryChange) {
			return dispatch((0, _actions.setQueryListener)(component, onQueryChange, beforeQueryChange));
		}
	};
};

exports.default = (0, _utils.connect)(mapStateToProps, mapDispatchtoProps)((0, _emotionTheming.withTheme)(DataSearch));

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/shared/CancelSvg.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _types = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/types.js");

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CancelSvg = function CancelSvg(_ref) {
	var onClick = _ref.onClick;
	return _react2.default.createElement(
		'svg',
		{
			alt: 'Clear',
			className: 'cancel-icon',
			height: '10',
			onClick: onClick,
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 212.982 212.982'
		},
		_react2.default.createElement(
			'title',
			null,
			'Clear'
		),
		_react2.default.createElement('path', {
			d: 'M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z'
		})
	);
};

CancelSvg.propTypes = {
	onClick: _types2.default.func
};

exports.default = CancelSvg;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/components/shared/SearchSvg.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchSvg = function SearchSvg() {
	return _react2.default.createElement(
		"svg",
		{
			alt: "Search",
			className: "search-icon",
			height: "14",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 15 15"
		},
		_react2.default.createElement(
			"title",
			null,
			"Search"
		),
		_react2.default.createElement("path", {
			d: " M6.02945,10.20327a4.17382,4.17382,0,1,1,4.17382-4.17382A4.15609,4.15609, 0,0,1,6.02945,10.20327Zm9.69195,4.2199L10.8989,9.59979A5.88021,5.88021, 0,0,0,12.058,6.02856,6.00467,6.00467,0,1,0,9.59979,10.8989l4.82338, 4.82338a.89729.89729,0,0,0,1.29912,0,.89749.89749,0,0,0-.00087-1.29909Z "
		})
	);
};

exports.default = SearchSvg;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/server/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = initReactivesearch;

var _appbaseJs = __webpack_require__("./node_modules/appbase-js/dist/appbase-js.es.js");

var _appbaseJs2 = _interopRequireDefault(_appbaseJs);

var _valueReducer = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/valueReducer.js");

var _valueReducer2 = _interopRequireDefault(_valueReducer);

var _queryReducer = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/queryReducer.js");

var _queryReducer2 = _interopRequireDefault(_queryReducer);

var _queryOptionsReducer = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/queryOptionsReducer.js");

var _queryOptionsReducer2 = _interopRequireDefault(_queryOptionsReducer);

var _dependencyTreeReducer = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/reducers/dependencyTreeReducer.js");

var _dependencyTreeReducer2 = _interopRequireDefault(_dependencyTreeReducer);

var _helper = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/utils/helper.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var componentsWithHighlightQuery = ['DataSearch', 'CategorySearch'];

var componentsWithOptions = ['ResultList', 'ResultCard', 'ReactiveList', 'ReactiveMap', 'SingleList', 'MultiList', 'TagCloud'].concat(componentsWithHighlightQuery);

var componentsWithoutFilters = ['NumberBox', 'RangeSlider', 'DynamicRangeSlider', 'RangeInput', 'RatingsFilter'];

var resultComponents = ['ResultCard', 'ResultList', 'ReactiveList', 'ReactiveMap'];

function getValue(state, id, defaultValue) {
	if (!state) return defaultValue;
	if (state[id]) {
		try {
			var parsedValue = JSON.parse(state[id]);
			return parsedValue;
		} catch (error) {
			// eslint-disable-next-line
			console.log('REACTIVESEARCH - could not parse the search state for', id);
		}
	}
	return defaultValue;
}

function parseValue(value, component) {
	if (component.source && component.source.parseValue) {
		return component.source.parseValue(value, component);
	}
	return value;
}

function getQuery(component, value) {
	// get default query of result components
	if (resultComponents.includes(component.type)) {
		return component.defaultQuery ? component.defaultQuery() : {};
	}

	// get custom or default query of sensor components
	var currentValue = parseValue(value, component);
	if (component.customQuery) {
		return component.customQuery(currentValue, component);
	}
	return component.source.defaultQuery ? component.source.defaultQuery(currentValue, component) : {};
}

function initReactivesearch(componentCollection, searchState, settings) {
	return new Promise(function (resolve, reject) {
		var credentials = settings.url && settings.url.trim() !== '' && !settings.credentials ? null : settings.credentials;
		var config = {
			url: settings.url && settings.url.trim() !== '' ? settings.url : 'https://scalr.api.appbase.io',
			app: settings.app,
			credentials: credentials,
			transformRequest: settings.transformRequest || null,
			type: settings.type ? settings.type : '*'
		};
		var appbaseRef = (0, _appbaseJs2.default)(config);

		var components = [];
		var selectedValues = {};
		var queryList = {};
		var queryLog = {};
		var queryOptions = {};
		var dependencyTree = {};
		var finalQuery = [];
		var orderOfQueries = [];
		var hits = {};
		var aggregations = {};
		var state = {};

		componentCollection.forEach(function (component) {
			components = [].concat(components, [component.componentId]);

			var isInternalComponentPresent = false;
			var isResultComponent = resultComponents.includes(component.type);
			var internalComponent = component.componentId + '__internal';
			var label = component.filterLabel || component.componentId;
			var value = getValue(searchState, label, component.defaultSelected);

			// [1] set selected values
			var showFilter = component.showFilter !== undefined ? component.showFilter : true;
			if (componentsWithoutFilters.includes(component.type)) {
				showFilter = false;
			}

			selectedValues = (0, _valueReducer2.default)(selectedValues, {
				type: 'SET_VALUE',
				component: component.componentId,
				label: label,
				value: value,
				showFilter: showFilter,
				URLParams: component.URLParams || false
			});

			// [2] set query options - main component query (valid for result components)
			if (componentsWithOptions.includes(component.type)) {
				var options = component.source.generateQueryOptions ? component.source.generateQueryOptions(component) : null;
				var highlightQuery = {};

				if (componentsWithHighlightQuery.includes(component.type) && component.highlight) {
					highlightQuery = component.source.highlightQuery(component);
				}

				if (options && Object.keys(options).length || highlightQuery && Object.keys(highlightQuery).length) {
					// eslint-disable-next-line
					var _ref = options || {},
					    aggs = _ref.aggs,
					    size = _ref.size,
					    otherQueryOptions = _objectWithoutProperties(_ref, ['aggs', 'size']);

					if (aggs && Object.keys(aggs).length) {
						isInternalComponentPresent = true;

						// query should be applied on the internal component
						// to enable feeding the data to parent component
						queryOptions = (0, _queryOptionsReducer2.default)(queryOptions, {
							type: 'SET_QUERY_OPTIONS',
							component: internalComponent,
							options: { aggs: aggs, size: size || 100 }
						});
					}

					// sort, highlight, size, from - query should be applied on the main component
					if (otherQueryOptions && Object.keys(otherQueryOptions).length || highlightQuery && Object.keys(highlightQuery).length) {
						if (!otherQueryOptions) otherQueryOptions = {};
						if (!highlightQuery) highlightQuery = {};

						var mainQueryOptions = _extends({}, otherQueryOptions, highlightQuery, { size: size });
						if (isInternalComponentPresent) {
							mainQueryOptions = _extends({}, otherQueryOptions, highlightQuery);
						}
						if (isResultComponent) {
							var currentPage = component.currentPage ? component.currentPage - 1 : 0;
							if (selectedValues[component.componentId] && selectedValues[component.componentId].value) {
								currentPage = selectedValues[component.componentId].value - 1 || 0;
							}
							var resultSize = component.size || 10;
							mainQueryOptions = _extends({}, mainQueryOptions, highlightQuery, {
								size: resultSize,
								from: currentPage * resultSize
							});
						}
						queryOptions = (0, _queryOptionsReducer2.default)(queryOptions, {
							type: 'SET_QUERY_OPTIONS',
							component: component.componentId,
							options: _extends({}, mainQueryOptions)
						});
					}
				}
			}

			// [3] set dependency tree
			if (component.react || isInternalComponentPresent || isResultComponent) {
				var react = component.react;

				if (isInternalComponentPresent || isResultComponent) {
					react = (0, _helper.pushToAndClause)(react, internalComponent);
				}

				dependencyTree = (0, _dependencyTreeReducer2.default)(dependencyTree, {
					type: 'WATCH_COMPONENT',
					component: component.componentId,
					react: react
				});
			}

			// [4] set query list
			if (isResultComponent) {
				var _getQuery = getQuery(component),
				    query = _getQuery.query;

				queryList = (0, _queryReducer2.default)(queryList, {
					type: 'SET_QUERY',
					component: internalComponent,
					query: query
				});
			} else {
				queryList = (0, _queryReducer2.default)(queryList, {
					type: 'SET_QUERY',
					component: component.componentId,
					query: getQuery(component, value)
				});
			}
		});

		// [5] Generate finalQuery for search
		componentCollection.forEach(function (component) {
			// eslint-disable-next-line
			var _buildQuery = (0, _helper.buildQuery)(component.componentId, dependencyTree, queryList, queryOptions),
			    queryObj = _buildQuery.queryObj,
			    options = _buildQuery.options;

			var validOptions = ['aggs', 'from', 'sort'];
			// check if query or options are valid - non-empty
			if (queryObj && !!Object.keys(queryObj).length || options && Object.keys(options).some(function (item) {
				return validOptions.includes(item);
			})) {
				var _extends2;

				if (!queryObj || queryObj && !Object.keys(queryObj).length) {
					queryObj = { match_all: {} };
				}

				orderOfQueries = [].concat(orderOfQueries, [component.componentId]);

				var currentQuery = _extends({
					query: _extends({}, queryObj)
				}, options, queryOptions[component.componentId]);

				queryLog = _extends({}, queryLog, (_extends2 = {}, _extends2[component.componentId] = currentQuery, _extends2));

				finalQuery = [].concat(finalQuery, [{
					preference: component.componentId
				}, currentQuery]);
			}
		});

		state = {
			components: components,
			dependencyTree: dependencyTree,
			queryList: queryList,
			queryOptions: queryOptions,
			selectedValues: selectedValues,
			queryLog: queryLog
		};

		appbaseRef.msearch({
			type: config.type === '*' ? '' : config.type,
			body: config.transformRequest ? config.transformRequest(finalQuery) : finalQuery
		}).then(function (res) {
			orderOfQueries.forEach(function (component, index) {
				var _extends4;

				var response = res.responses[index];
				if (response.aggregations) {
					var _extends3;

					aggregations = _extends({}, aggregations, (_extends3 = {}, _extends3[component] = response.aggregations, _extends3));
				}
				hits = _extends({}, hits, (_extends4 = {}, _extends4[component] = {
					hits: response.hits.hits,
					total: response.hits.total,
					time: response.took
				}, _extends4));
			});
			state = _extends({}, state, {
				hits: hits,
				aggregations: aggregations
			});
			resolve(state);
		}).catch(function (err) {
			return reject(err);
		});
	});
}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/Base.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	target: 'e1n4b2jv0'
})('font-family:', function (_ref) {
	var theme = _ref.theme;
	return theme.typography.fontFamily;
}, ';font-size:', function (_ref2) {
	var theme = _ref2.theme;
	return theme.typography.fontSize;
}, ';color:', function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.textColor;
}, ';width:100%;input,button,textarea,select{font-family:', function (_ref4) {
	var theme = _ref4.theme;
	return theme.typography.fontFamily;
}, ';}*,*:before,*:after{box-sizing:border-box;}');

exports.default = Base;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/Button.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.loadMoreContainer = exports.numberBoxContainer = exports.toggleButtons = exports.filters = exports.pagination = undefined;

var _emotion = __webpack_require__("./node_modules/emotion/dist/index.esm.js");

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _polished = __webpack_require__("./node_modules/polished/dist/polished.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filters = function filters(_ref) {
	var borderColor = _ref.colors.borderColor;
	return (/*#__PURE__*/(0, _emotion.css)('margin:0 -3px;max-width:100%;a{margin:2px 3px;padding:5px 8px;font-size:0.85rem;position:relative;span:first-child{max-width:260px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:26px;}span:last-child{display:flex;height:100%;top:0;right:8px;position:absolute;align-items:center;border-left:1px solid ', borderColor || '#fff', ';padding-left:8px;margin-left:8px;}&:hover,&:focus{span:first-child{text-decoration:line-through;}}}')
	);
};

var pagination = /*#__PURE__*/(0, _emotion.css)('margin:10px -3px;max-width:100%;text-align:center;a{margin:0 3px;}');

var toggleButtons = /*#__PURE__*/(0, _emotion.css)('margin:0 -3px;max-width:100%;a{margin:3px 3px;}');

var numberBoxContainer = /*#__PURE__*/(0, _emotion.css)('margin:0 -5px;a{margin:5px;}span{margin:0 5px;}');

var loadMoreContainer = /*#__PURE__*/(0, _emotion.css)({
	margin: '5px 0',
	display: 'flex',
	justifyContent: 'center'
});

var primary = function primary(_ref2) {
	var theme = _ref2.theme;
	return (/*#__PURE__*/(0, _emotion.css)('background-color:', theme.colors.primaryColor, ';color:', theme.colors.primaryTextColor, ';&:hover,&:focus{background-color:', (0, _polished.darken)(0.1, theme.colors.primaryColor), ';}')
	);
};

var large = function large() {
	return (/*#__PURE__*/(0, _emotion.css)('min-height:40px;padding:10px 20px;')
	);
};

var disabled = function disabled(_ref3) {
	var theme = _ref3.theme;
	return (/*#__PURE__*/(0, _emotion.css)('background-color:', theme.colors.backgroundColor ? (0, _polished.lighten)(0.1, theme.colors.backgroundColor) : '#fafafa', ';color:#ccc;cursor:not-allowed;&:hover,&:focus{background-color:', theme.colors.backgroundColor ? (0, _polished.lighten)(0.2, theme.colors.backgroundColor) : '#fafafa', ';}')
	);
};

var Button = /*#__PURE__*/(0, _reactEmotion2.default)('a', {
	target: 'e165j7gc0'
})('display:inline-flex;justify-content:center;align-items:center;border-radius:3px;border:1px solid transparent;min-height:30px;word-wrap:break-word;padding:5px 12px;line-height:1.2rem;background-color:', function (_ref4) {
	var theme = _ref4.theme;
	return theme.colors.backgroundColor || '#eee';
}, ';color:', function (_ref5) {
	var theme = _ref5.theme;
	return theme.colors.textColor;
}, ';cursor:pointer;user-select:none;transition:all 0.3s ease;&:hover,&:focus{background-color:', function (_ref6) {
	var theme = _ref6.theme;
	return theme.colors.backgroundColor ? (0, _polished.darken)(0.1, theme.colors.backgroundColor) : '#ccc';
}, ';}&:focus{outline:0;border-color:', function (_ref7) {
	var theme = _ref7.theme;
	return (0, _polished.rgba)(theme.colors.primaryColor, 0.6);
}, ';box-shadow:', function (_ref8) {
	var theme = _ref8.theme;
	return '0 0 0 2px ' + (0, _polished.rgba)(theme.colors.primaryColor, 0.3);
}, ';}', function (props) {
	return props.primary ? primary : null;
}, ';', function (props) {
	return props.disabled ? disabled : null;
}, ';', function (props) {
	return props.large && large;
}, ';');

exports.pagination = pagination;
exports.filters = filters;
exports.toggleButtons = toggleButtons;
exports.numberBoxContainer = numberBoxContainer;
exports.loadMoreContainer = loadMoreContainer;
exports.default = Button;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/Card.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Image = exports.Title = exports.container = undefined;

var _emotion = __webpack_require__("./node_modules/emotion/dist/index.esm.js");

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _polished = __webpack_require__("./node_modules/polished/dist/polished.es.js");

var _Title = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Title.js");

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = /*#__PURE__*/(0, _emotion.css)('display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;margin:0 -8px;@media (max-width:420px){margin:0;}');

var Image = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	target: 'e1cc0ogo0'
})('width:calc(100% + 20px);height:220px;margin:-10px -10px 0;background-color:', function (_ref) {
	var colors = _ref.theme.colors;
	return colors.backgroundColor || '#fcfcfc';
}, ';background-size:contain;background-position:center center;background-repeat:no-repeat;');

var Card = /*#__PURE__*/(0, _reactEmotion2.default)('a', {
	target: 'e1cc0ogo1'
})('width:auto;flex-grow:1;outline:none;text-decoration:none;min-width:240px;max-width:250px;border-radius:0.25rem;background-color:', function (_ref2) {
	var theme = _ref2.theme;
	return theme.colors.backgroundColor ? (0, _polished.lighten)(0.1, theme.colors.backgroundColor) : '#fff';
}, ';height:300px;display:flex;flex-direction:column;justify-content:space-between;margin:8px;padding:10px;overflow:hidden;box-shadow:0 0 4px 0 rgba(0,0,0,0.2);color:', function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.textColor;
}, ';', function (props) {
	return props.href ? 'cursor: pointer' : null;
}, ';transition:all 0.3s ease;h2{width:100%;font-size:0.9rem;line-height:1.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;padding:10px 0 8px;}p{margin:0}article{flex-grow:1;font-size:0.9rem;}&:hover,&:focus{box-shadow:0 0 8px 1px rgba(0,0,0,.3);}@media (max-width:420px){width:50%;min-width:0;height:210px;margin:0;border-radius:0;box-shadow:none;border:1px solid #eee;&:hover,&:focus{box-shadow:0;}}');

exports.default = Card;
exports.container = container;
exports.Title = _Title2.default;
exports.Image = Image;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/Container.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	target: 'e1nzkzy80'
})(function (_ref) {
	var theme = _ref.theme;
	return theme.component;
}, ';');

exports.default = Container;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/DateContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotionTheming = __webpack_require__("./node_modules/emotion-theming/dist/index.esm.js");

var _polished = __webpack_require__("./node_modules/polished/dist/polished.es.js");

var _Input = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/styles/Input.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateContainer = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	target: 'eqdaryi0'
})('position:relative;.DayPicker{z-index:1000;display:inline-block;}.DayPicker-wrapper{position:relative;user-select:none;padding-bottom:1rem;flex-direction:row;}.DayPicker-Months{display:flex;flex-wrap:wrap;justify-content:center;}.DayPicker-Month{display:table;border-collapse:collapse;border-spacing:0;user-select:none;margin:0 1rem;margin-top:1rem;}.DayPicker-NavButton{position:absolute;cursor:pointer;top:1rem;right:1.5rem;margin-top:2px;color:#8b9898;width:1.25rem;height:1.25rem;display:inline-block;background-size:50%;background-repeat:no-repeat;background-position:center;}.DayPicker-NavButton:hover{opacity:0.8;}.DayPicker-NavButton--prev{margin-right:1.5rem;background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC\');}.DayPicker-NavButton--next{background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==\');}.DayPicker-NavButton--interactionDisabled{display:none;}.DayPicker-Caption{padding:0 0.5rem;display:table-caption;text-align:left;margin-bottom:0.5rem;}.DayPicker-Caption > div{font-size:1.15rem;font-weight:500;}.DayPicker-Weekdays{margin-top:1rem;display:table-header-group;}.DayPicker-WeekdaysRow{display:table-row;}.DayPicker-Weekday{display:table-cell;padding:0.5rem;font-size:0.875em;text-align:center;color:#8b9898;}.DayPicker-Weekday abbr[title]{border-bottom:none;text-decoration:none;}.DayPicker-Body{display:table-row-group;}.DayPicker-Week{display:table-row;}.DayPicker-Day{display:table-cell;padding:0.5rem;text-align:center;cursor:pointer;vertical-align:middle;outline:none;}.DayPicker-WeekNumber{display:table-cell;padding:0.5rem;text-align:right;vertical-align:middle;min-width:1rem;font-size:0.75em;cursor:pointer;color:#8b9898;border-right:1px solid #eaecec;}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}.DayPicker-Footer{padding-top:0.5rem;}.DayPicker-TodayButton{border:none;background-image:none;background-color:transparent;-webkit-box-shadow:none;box-shadow:none;cursor:pointer;color:', function (_ref) {
	var theme = _ref.theme;
	return theme.colors.primaryColor;
}, ';font-size:0.875em;}.DayPicker-Day--today{color:', function (_ref2) {
	var theme = _ref2.theme;
	return theme.colors.primaryColor;
}, ';font-weight:700;}.DayPicker-Day--outside{cursor:default;color:#8b9898;}.DayPicker-Day--disabled{color:#dce0e0;cursor:default;}.DayPicker-Day--sunday{background-color:#f7f8f8;}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0;}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;color:#f0f8ff;color:#f0f8ff;background-color:', function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.primaryColor;
}, ';border-radius:', function (_ref4) {
	var range = _ref4.range;
	return range ? 0 : '100%';
}, ';}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:', function (_ref5) {
	var theme = _ref5.theme;
	return (0, _polished.lighten)(0.1, theme.colors.primaryColor);
}, ';}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:', function (_ref6) {
	var theme = _ref6.theme;
	return (0, _polished.lighten)(0.1, theme.colors.primaryColor);
}, ';border-radius:50%;}.DayPicker-Day--selected.DayPicker-Day--start:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){border-top-left-radius:50%;border-bottom-left-radius:50%;}.DayPicker-Day--selected.DayPicker-Day--end:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){border-top-right-radius:50%;border-bottom-right-radius:50%;}.DayPicker-Day.DayPicker-Day--end:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){border-top-right-radius:50%;border-bottom-right-radius:50%;background-color:', function (_ref7) {
	var theme = _ref7.theme;
	return theme.colors.primaryColor || '#fff';
}, ';color:#fff;}.DayPickerInput{flex:1;}.DayPickerInput input{', _Input.input, ';background-color:', function (_ref8) {
	var colors = _ref8.theme.colors;
	return colors.backgroundColor || '#fff';
}, ';color:', function (_ref9) {
	var colors = _ref9.theme.colors;
	return colors.textColor;
}, ';', function (_ref10) {
	var showBorder = _ref10.showBorder;
	return !showBorder && /*#__PURE__*/(0, _reactEmotion.css)('border:none;');
}, ';&:focus{background-color:', function (_ref11) {
	var colors = _ref11.theme.colors;
	return colors.backgroundColor || '#fff';
}, ';}}.DayPickerInput-OverlayWrapper{position:absolute;width:100%;left:0;z-index:4;}.DayPickerInput-OverlayWrapper .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside){background-color:', function (_ref12) {
	var theme = _ref12.theme;
	return (0, _polished.lighten)(0.1, theme.colors.primaryColor) || '#f0f8ff';
}, ';}.DayPickerInput-Overlay{left:0;top:1px;z-index:1;position:absolute;background:', function (_ref13) {
	var colors = _ref13.theme.colors;
	return colors.backgroundColor ? (0, _polished.lighten)(0.15, colors.backgroundColor) : '#fff';
}, ';box-shadow:0 2px 5px rgba(0,0,0,0.15);}', function (_ref14) {
	var theme = _ref14.theme;
	return theme.component;
}, ';');

exports.default = (0, _emotionTheming.withTheme)(DateContainer);

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/Flex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _emotion = __webpack_require__("./node_modules/emotion/dist/index.esm.js");

var _polished = __webpack_require__("./node_modules/polished/dist/polished.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var leftLabel = /*#__PURE__*/(0, _emotion.css)('flex-direction:row;align-items:center;');

var rightLabel = /*#__PURE__*/(0, _emotion.css)('flex-direction:row-reverse;align-items:center;');

var topLabel = /*#__PURE__*/(0, _emotion.css)('flex-direction:column;');

var bottomLabel = /*#__PURE__*/(0, _emotion.css)('flex-direction:column-reverse;');

var border = function border(_ref) {
	var colors = _ref.theme.colors;
	return (/*#__PURE__*/(0, _emotion.css)('border:1px solid ', colors.borderColor || '#ccc', ';')
	);
};

var Flex = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	target: 'e1hwwpu60'
})('display:', function (props) {
	return props.inline ? 'inline-flex' : 'flex';
}, ';', function (props) {
	return (props.labelPosition === 'left' || props.iconPosition === 'right') && leftLabel;
}, ';', function (props) {
	return (props.labelPosition === 'right' || props.iconPosition === 'left') && rightLabel;
}, ';', function (props) {
	return props.labelPosition === 'top' && topLabel;
}, ';', function (props) {
	return props.labelPosition === 'bottom' && bottomLabel;
}, ';', function (props) {
	return props.showBorder && border;
}, ';', function (props) {
	return props.justifyContent && /*#__PURE__*/(0, _emotion.css)('justify-content:', props.justifyContent, ';');
}, ';', function (props) {
	return props.alignItems && /*#__PURE__*/(0, _emotion.css)('align-items:', props.alignItems, ';');
}, ';', function (props) {
	return props.flex && /*#__PURE__*/(0, _emotion.css)('flex:', props.flex, ';');
}, ';', function (props) {
	return props.direction && /*#__PURE__*/(0, _emotion.css)('flex-direction:', props.direction, ';');
}, ';', function (props) {
	return props.basis && /*#__PURE__*/(0, _emotion.css)('flex-basis:', props.basis, ';');
}, ';svg.cancel-icon{cursor:pointer;fill:', function (_ref2) {
	var colors = _ref2.theme.colors;
	return colors.borderColor || (0, _polished.lighten)(0.3, colors.textColor);
}, ';flex-basis:30px;&:hover{fill:', function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.textColor;
}, ';}}');

exports.default = Flex;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/FormControlList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Checkbox = exports.Radio = exports.UL = undefined;

var _emotion = __webpack_require__("./node_modules/emotion/dist/index.esm.js");

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _polished = __webpack_require__("./node_modules/polished/dist/polished.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var item = {
	width: '15px',
	height: '15px',
	scale: '4px'
};

var vh = /*#__PURE__*/(0, _emotion.css)('border:0;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;');

var hideInputControl = /*#__PURE__*/(0, _emotion.css)('+ label{padding-left:0;&::before,&::after{width:0;height:0;border:0;margin:0;visibility:hidden;}}&:checked{+ label{font-weight:bold;}}');

var formItem = function formItem(_ref) {
	var theme = _ref.theme;
	return (/*#__PURE__*/(0, _emotion.css)(vh, ';&:focus{+ label{&::before{box-shadow:0 0 0 2px ', (0, _polished.lighten)(0.4, theme.colors.primaryColor), ';}}}&:hover{+ label{&::before{border-color:', theme.colors.primaryColor, ';}}}&:active{+ label{&::before{transition-duration:0;}}}+ label{position:relative;user-select:none;display:flex;width:100%;height:100%;align-items:center;cursor:pointer;&::before{background-color:#fff;border:1px solid ', theme.colors.borderColor || (0, _polished.lighten)(0.1, theme.colors.textColor), ';box-sizing:content-box;content:\'\';color:', theme.colors.primaryColor, ';margin-right:calc(', item.width, ' * 0.5);top:50%;left:0;width:', item.width, ';height:', item.height, ';display:inline-block;vertical-align:middle;}&::after{box-sizing:content-box;content:\'\';background-color:', theme.colors.primaryColor, ';position:absolute;top:50%;left:calc(1px + ', item.scale, ' / 2);width:calc(', item.width, ' - ', item.scale, ');height:calc(', item.height, ' - ', item.scale, ');margin-top:calc(', item.height, ' / -2 - ', item.scale, ' / -2);transform:scale(0);transform-origin:50%;transition:transform 200ms ease-out;}}')
	);
};

var Radio = /*#__PURE__*/(0, _reactEmotion2.default)('input', {
	target: 'eekr4lp0'
})(formItem, ';', function (props) {
	return props.show ? null : hideInputControl;
}, ';+ label{&::before,&::after{border-radius:50%;}}&:checked{&:active,&:focus{+ label{color:', function (_ref2) {
	var theme = _ref2.theme;
	return theme.colors.primaryColor;
}, ';&::before{animation:none;filter:none;transition:none;}}}+ label{&::before{animation:none;background-color:#fff;border-color:', function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.primaryColor;
}, ';}&::after{transform:scale(1);}}');

Radio.defaultProps = {
	type: 'radio',
	show: true
};

var Checkbox = /*#__PURE__*/(0, _reactEmotion2.default)('input', {
	target: 'eekr4lp1'
})(formItem, ';', function (props) {
	return props.show ? null : hideInputControl;
}, ';+ label{&::before,&::after{border-radius:0;}&::after{background-color:transparent;top:50%;left:calc(1px + ', item.width, ' / 5);width:calc(', item.width, ' / 2);height:calc(', item.width, ' / 5);margin-top:calc(', item.height, ' / -2 / 2 * 0.8);border-style:solid;border-color:', function (_ref4) {
	var theme = _ref4.theme;
	return theme.colors.primaryColor;
}, ';border-width:0 0 2px 2px;border-radius:0;border-image:none;transform:rotate(-45deg) scale(0);transition:none;}}&:checked{+ label{&::before{border-color:', function (_ref5) {
	var theme = _ref5.theme;
	return theme.colors.primaryColor;
}, ';}&::after{content:\'\';transform:rotate(-45deg) scale(1);transition:transform 200ms ease-out;}}}');

Checkbox.defaultProps = {
	type: 'checkbox',
	show: true
};

var UL = /*#__PURE__*/(0, _reactEmotion2.default)('ul', {
	target: 'eekr4lp2'
})('list-style:none;padding:0;margin:0;max-height:240px;position:relative;overflow-y:auto;padding-bottom:12px;li{height 30px;display:flex;flex-direction:row;align-items:center;padding-left:2px;}');

exports.UL = UL;
exports.Radio = Radio;
exports.Checkbox = Checkbox;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/Histogram.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.histogramContainer = undefined;

var _emotion = __webpack_require__("./node_modules/emotion/dist/index.esm.js");

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var histogramContainer = /*#__PURE__*/exports.histogramContainer = (0, _emotion.css)('display:flex;height:100px;align-items:flex-end;margin:0 12px -24px 12px;');

var dimensions = function dimensions(props) {
	return (/*#__PURE__*/(0, _emotion.css)('width:', props.width, ';height:', props.height, ';')
	);
};

var Historam = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	target: 'e1y359pe0'
})('background-color:#efefef;', dimensions);

exports.default = Historam;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/Input.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.noSuggestions = exports.input = exports.suggestions = exports.suggestionsContainer = undefined;

var _emotion = __webpack_require__("./node_modules/emotion/dist/index.esm.js");

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alertBorder = function alertBorder(_ref) {
	var theme = _ref.theme;
	return (/*#__PURE__*/(0, _emotion.css)('border:1px solid ', theme.colors.alertColor, ';')
	);
};

var input = /*#__PURE__*/(0, _emotion.css)('width:100%;height:42px;padding:8px 12px;border:1px solid #ccc;background-color:#fafafa;font-size:0.9rem;outline:none;&:focus{background-color:#fff;}');

var dark = function dark(theme) {
	return (/*#__PURE__*/(0, _emotion.css)('border-color:', theme.colors.borderColor, ';')
	);
};

var darkInput = function darkInput(_ref2) {
	var theme = _ref2.theme;
	return (/*#__PURE__*/(0, _emotion.css)('background-color:', theme.colors.backgroundColor, ';color:', theme.colors.textColor, ';', dark(theme), ';&:focus{background-color:', theme.colors.backgroundColor, ';}')
	);
};

var Input = /*#__PURE__*/(0, _reactEmotion2.default)('input', {
	target: 'ep3169p0'
})(input, ';', function (_ref3) {
	var themePreset = _ref3.themePreset;
	return themePreset === 'dark' && darkInput;
}, ';', function (props) {
	return props.showIcon && props.iconPosition === 'left' && /*#__PURE__*/(0, _emotion.css)('padding-left:32px;');
}, ';', function (props) {
	return props.showIcon && props.iconPosition === 'right' && /*#__PURE__*/(0, _emotion.css)('padding-right:32px;');
}, ';', function (props) {
	return (
		// for clear icon
		props.showClear && /*#__PURE__*/(0, _emotion.css)('padding-right:32px;')
	);
}, ';', function (props) {
	return (
		// for clear icon with search icon
		props.showClear && props.showIcon && props.iconPosition === 'right' && /*#__PURE__*/(0, _emotion.css)('padding-right:48px;')
	);
}, ';', function (props) {
	return props.alert && alertBorder;
}, ';');

var noSuggestions = function noSuggestions(themePreset, theme) {
	return (/*#__PURE__*/(0, _emotion.css)('display:block;width:100%;border:1px solid #ccc;background-color:#fff;font-size:0.9rem;z-index:3;position:absolute;top:41px;margin:0;padding:0;list-style:none;max-height:260px;overflow-y:auto;&.small{top:30px;}li{display:flex;justify-content:space-between;padding:10px;user-select:none;& > .trim{display:block;display:-webkit-box;width:100%;max-height:2.3rem;line-height:1.2rem;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}}', themePreset === 'dark' && dark(theme))
	);
};

var suggestions = function suggestions(themePreset, theme) {
	return (/*#__PURE__*/(0, _emotion.css)('display:block;width:100%;border:1px solid #ccc;background-color:#fff;font-size:0.9rem;z-index:3;position:absolute;top:41px;margin:0;padding:0;list-style:none;max-height:260px;overflow-y:auto;&.small{top:30px;}li{display:flex;justify-content:space-between;cursor:pointer;padding:10px;user-select:none;& > .trim{display:block;display:-webkit-box;width:100%;max-height:2.3rem;line-height:1.2rem;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}&:hover,&:focus{background-color:#eee;}}', themePreset === 'dark' && dark(theme))
	);
};

var suggestionsContainer = /*#__PURE__*/(0, _emotion.css)('position:relative;.cancel-icon{cursor:pointer;}');

exports.default = Input;
exports.suggestionsContainer = suggestionsContainer;
exports.suggestions = suggestions;
exports.input = input;
exports.noSuggestions = noSuggestions;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/InputIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var left = /*#__PURE__*/(0, _reactEmotion.css)('padding-left:12px;left:0;');

var right = /*#__PURE__*/(0, _reactEmotion.css)('padding-right:12px;right:0;');

var clear = /*#__PURE__*/(0, _reactEmotion.css)('padding-right:32px;right:0;top:calc(50% - 9px);');

var InputIcon = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	target: 'ekqohx90'
})('position:absolute;top:calc(50% - 8px);cursor:pointer;', function (_ref) {
	var iconPosition = _ref.iconPosition;

	if (iconPosition === 'left') {
		return left;
	} else if (iconPosition === 'right') {
		return right;
	}
	return null;
}, ';', function (_ref2) {
	var clearIcon = _ref2.clearIcon;
	return clearIcon && clear;
}, '};svg.search-icon{fill:', function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.primaryColor;
}, ';}svg.cancel-icon{fill:', function (_ref4) {
	var theme = _ref4.theme;
	return theme.colors.borderColor;
}, ';}');

exports.default = InputIcon;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/Label.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.rangeLabelsContainer = undefined;

var _emotion = __webpack_require__("./node_modules/emotion/dist/index.esm.js");

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var left = /*#__PURE__*/(0, _emotion.css)('left:0;margin-left:3px;');

var right = /*#__PURE__*/(0, _emotion.css)('right:0;margin-right:3px;');

var Label = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	target: 'e1atnqi30'
})('position:absolute;top:-25px;', function (props) {
	return props.align === 'left' && left;
}, ' ', function (props) {
	return props.align === 'right' && right;
});

var rangeLabelsContainer = /*#__PURE__*/exports.rangeLabelsContainer = (0, _emotion.css)('position:relative;');

exports.default = Label;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/PoweredByImage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PoweredByImage = /*#__PURE__*/(0, _reactEmotion2.default)('img', {
	target: 'e1eb5iy50'
})('width:110px;');

exports.default = PoweredByImage;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/Slider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emotion = __webpack_require__("./node_modules/emotion/dist/index.esm.js");

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var primary = function primary(_ref) {
	var theme = _ref.theme;
	return (/*#__PURE__*/(0, _emotion.css)('background-color:', theme.colors.primaryColor, ';')
	);
};

var Slider = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	target: 'e1p4hzk20'
})('.rheostat{overflow:visible;margin:24px 12px;}.rheostat-progress{background-color:#d8d8d8;position:absolute;', function (props) {
	return props.primary && primary;
}, '}.rheostat-handle{border:1px solid #9a9a9a;', function (props) {
	return props.primary && primary;
}, ' background-color:#fff;border-radius:50%;height:24px;outline:none;z-index:2;width:24px;cursor:pointer;}.rheostat-horizontal{height:24px;}.rheostat-background{height:4px;background-color:#c7c7c7;top:0px;width:100%;position:relative;}.rheostat-horizontal .rheostat-progress{height:4px;top:0;}.rheostat-horizontal .rheostat-handle{margin-left:-12px;top:-10px;}.slider-tooltip,.slider-tooltip-focus,.slider-tooltip-visible{visibility:hidden;background-color:black;color:#fff;text-align:center;border-radius:6px;padding:6px 8px;position:absolute;z-index:1;transform:translate(-50%,-170%);}.slider-tooltip-visible{visibility:visible;}.slider-tooltip:after,.slider-tooltip-focus:after,.slider-tooltip-visible:after{content:\'\';position:absolute;top:98%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent;}.rheostat-handle:hover .slider-tooltip,.rheostat-handle:focus .slider-tooltip,.rheostat-handle:active .slider-tooltip{visibility:visible;}.rheostat-handle:hover .slider-tooltip-focus{visibility:hidden;}.rheostat-handle:focus .slider-tooltip-focus,.rheostat-handle:active .slider-tooltip-focus{visibility:visible;}', function (_ref2) {
	var theme = _ref2.theme;
	return theme.component;
}, ';');

exports.default = Slider;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/Title.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactEmotion = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = /*#__PURE__*/(0, _reactEmotion2.default)('h2', {
	target: 'e1hnx4sx0'
})('margin:0 0 8px;font-size:1rem;color:', function (_ref) {
	var theme = _ref.theme;
	return theme.colors.titleColor;
}, ';');

exports.default = Title;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/results.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.sortOptions = exports.resultStats = undefined;

var _emotion = __webpack_require__("./node_modules/emotion/dist/index.esm.js");

var resultStats = /*#__PURE__*/(0, _emotion.css)('flex-grow:1;font-size:0.82rem;');

var sortOptions = /*#__PURE__*/(0, _emotion.css)('color:#424242;height:32px;font-size:0.82rem;padding:0 25px 0 10px;background:url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+) no-repeat 95% 50%;background-color:#fff;-moz-appearance:none;-webkit-appearance:none;appearance:none;-webkit-border-radius:0;border-radius:0;border:0;outline:1px solid #ddd;outline-offset:-1px;');

exports.resultStats = resultStats;
exports.sortOptions = sortOptions;

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/styles/theme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getTheme;
var typography = {
	fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
	fontSize: '16px'
};

var light = {
	typography: typography,

	colors: {
		textColor: '#424242',
		primaryTextColor: '#fff',
		primaryColor: '#0B6AFF',
		titleColor: '#424242',
		alertColor: '#d9534f'
	}
};

var dark = {
	typography: typography,

	colors: {
		textColor: '#fff',
		backgroundColor: '#212121',
		primaryTextColor: '#fff',
		primaryColor: '#2196F3',
		titleColor: '#fff',
		alertColor: '#d9534f',
		borderColor: '#666'
	}
};

function getTheme(preset) {
	if (preset === 'light') {
		return light;
	}
	return dark;
}

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/lib/utils/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.composeThemeObject = exports.connect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _reactivecore = __webpack_require__("./node_modules/@appbaseio/reactivecore/lib/index.js");

var connect = exports.connect = function connect() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return _reactRedux.connect.apply(undefined, args.concat([null, {
		storeKey: _reactivecore.storeKey
	}]));
};

var composeThemeObject = exports.composeThemeObject = function composeThemeObject() {
	var ownTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var userTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	return {
		typography: _extends({}, ownTheme.typography, userTheme.typography),
		colors: _extends({}, ownTheme.colors, userTheme.colors),
		component: _extends({}, ownTheme.component, userTheme.component)
	};
};

/***/ }),

/***/ "./node_modules/@appbaseio/reactivesearch/package.json":
/***/ (function(module, exports) {

module.exports = {"_from":"@appbaseio/reactivesearch@^2.6.2","_id":"@appbaseio/reactivesearch@2.17.0","_inBundle":false,"_integrity":"sha512-6RPYdNFDmbM/cDgx/2DUmz0IM1wbJaApFlETW993qmm/PkJjPewZobb6INm+OUDKZK03eFZjobWejj6/UxL8Rg==","_location":"/@appbaseio/reactivesearch","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"@appbaseio/reactivesearch@^2.6.2","name":"@appbaseio/reactivesearch","escapedName":"@appbaseio%2freactivesearch","scope":"@appbaseio","rawSpec":"^2.6.2","saveSpec":null,"fetchSpec":"^2.6.2"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/@appbaseio/reactivesearch/-/reactivesearch-2.17.0.tgz","_shasum":"375e68f663df8b4e9d11bae3d207b897f2bc9673","_spec":"@appbaseio/reactivesearch@^2.6.2","_where":"/Users/jimmydang/Projects/MovieSearch","author":{"name":"metagrover"},"bugs":{"url":"https://github.com/appbaseio/reactivesearch/issues"},"bundleDependencies":false,"dependencies":{"@appbaseio/reactivecore":"^7.1.0","appbase-js":"^4.0.2-beta.5","cross-env":"^5.2.0","downshift":"^1.31.2","emotion":"^9.0.0","emotion-theming":"^9.0.0","polished":"^1.9.3","prop-types":"^15.6.0","react-day-picker":"^7.0.5","react-emotion":"^9.0.0","react-redux":"^5.0.7","rheostat":"^2.1.1","url-search-params":"^0.10.0","xdate":"^0.8.2"},"deprecated":false,"description":"A React UI components library for building search experiences","devDependencies":{"@types/react":"^16.3.8","babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-plugin-emotion":"^9.0.0","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","babili-webpack-plugin":"^0.1.2","brotli-webpack-plugin":"^0.5.0","compression-webpack-plugin":"^1.0.1","eslint-plugin-jest":"^21.12.2","fs-extra":"^7.0.0","glob":"^7.1.2","jest":"^22.4.2","path":"^0.12.7","react":"^16.1.1","react-dom":"^16.1.1","tslint":"^5.9.1","typescript":"^2.8.1","webpack":"^4.18.0","webpack-cli":"^3.1.0"},"files":["lib/","umd"],"homepage":"https://github.com/appbaseio/reactivesearch#readme","js:next":"lib/index.es.js","license":"Apache-2.0","main":"lib/index.js","module":"lib/index.es.js","name":"@appbaseio/reactivesearch","peerDependencies":{"react":">=15","react-dom":">=15"},"repository":{"type":"git","url":"git+https://github.com/appbaseio/reactivesearch.git"},"resolutions":{"@types/react":"16.3.7"},"scripts":{"build":"yarn build:commonjs && yarn build:es && yarn build:copy-types","build:commonjs":"cross-env BABEL_ENV=commonjs babel --ignore __tests__ src --out-dir lib","build:copy-types":"npx babel-node ./scripts/copy-types.js","build:es":"cross-env BABEL_ENV=es babel src/index.js --out-file lib/index.es.js","build:umd":"cross-env BABEL_ENV=commonjs webpack --progress -p --config webpack.config.umd.js","prepublish":"yarn run build","stats":"webpack --progress -p --config webpack.config.umd.js --json > stats.json","test":"jest --watch","typescript":"tsc -p tsconfig.json","watch":"yarn build:commonjs -w && yarn build:es -w"},"sideEffects":false,"types":"lib/index.d.ts","version":"2.17.0"}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inheritsLoose;
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["a"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_memoize__ = __webpack_require__("./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i;
var index = Object(__WEBPACK_IMPORTED_MODULE_0__emotion_memoize__["a" /* default */])(reactPropsRegex.test.bind(reactPropsRegex));

/* harmony default export */ __webpack_exports__["a"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }

            break;

          case Function:
            S[A++] = d;
            break;

          case Boolean:
            Y = !!d | 0;
        }

    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["a"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["a"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/appbase-js/dist/appbase-js.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_parser_lite__ = __webpack_require__("./node_modules/url-parser-lite/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_parser_lite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_url_parser_lite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring__ = __webpack_require__("./node_modules/querystring-es3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cross_fetch__ = __webpack_require__("./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cross_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cross_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_json_stable_stringify__ = __webpack_require__("./node_modules/json-stable-stringify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_json_stable_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_json_stable_stringify__);





var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function contains(string, substring) {
  return string.indexOf(substring) !== -1;
}
function isAppbase(url) {
  return contains(url, 'scalr.api.appbase.io');
}
function btoa() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var str = input;
  var output = '';

  // eslint-disable-next-line
  for (var block = 0, charCode, i = 0, map = chars; str.charAt(i | 0) || (map = '=', i % 1); // eslint-disable-line no-bitwise
  output += map.charAt(63 & block >> 8 - i % 1 * 8) // eslint-disable-line no-bitwise
  ) {
    charCode = str.charCodeAt(i += 3 / 4);

    if (charCode > 0xff) {
      throw new Error('"btoa" failed: The string to be encoded contains characters outside of the Latin1 range.');
    }

    block = block << 8 | charCode; // eslint-disable-line no-bitwise
  }

  return output;
}
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0; // eslint-disable-line no-bitwise

    var v = c === 'x' ? r : r & 0x3 | 0x8; // eslint-disable-line no-bitwise
    return v.toString(16);
  });
}
function validate(object, fields) {
  var invalid = [];
  var emptyFor = {
    object: null,
    string: ''
  };
  var keys = Object.keys(fields);
  keys.forEach(function (key) {
    var type = fields[key];
    // eslint-disable-next-line
    if (_typeof(object[key]) !== type || object[key] === emptyFor[type]) {
      invalid.push(key);
    }
  });
  var missing = '';
  for (var i = 0; i < invalid.length; i += 1) {
    missing += invalid[i] + ', ';
  }
  if (invalid.length > 0) {
    return new Error('fields missing: ' + missing);
  }

  return true;
}

function removeUndefined(value) {
  if (value || !(Object.keys(value).length === 0 && value.constructor === Object)) {
    return JSON.parse(JSON.stringify(value));
  }
  return null;
}

/**
 * Send only when a connection is opened
 * @param {Object} socket
 * @param {Function} callback
 */
function waitForSocketConnection(socket, callback) {
  setTimeout(function () {
    if (socket.readyState === 1) {
      if (callback != null) {
        callback();
      }
    } else {
      waitForSocketConnection(socket, callback);
    }
  }, 5); // wait 5 ms for the connection...
}

function encodeHeaders() {
  var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var shouldEncode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  // Encode headers
  var encodedHeaders = {};
  if (shouldEncode) {
    Object.keys(headers).forEach(function (header) {
      encodedHeaders[header] = encodeURI(headers[header]);
    });
  } else {
    encodedHeaders = headers;
  }
  return encodedHeaders;
}

/**
 * Returns an instance of Appbase client
 * @param {Object} config To configure properties
 * @param {String} config.url
 * @param {String} config.app
 * @param {String} config.credentials
 * @param {String} config.username
 * @param {String} config.password
 * A callback function which will be invoked before a fetch request made
 */
function AppBase(config) {
  var _URL = __WEBPACK_IMPORTED_MODULE_0_url_parser_lite___default()(config.url || ''),
      _URL$auth = _URL.auth,
      auth = _URL$auth === undefined ? null : _URL$auth,
      _URL$host = _URL.host,
      host = _URL$host === undefined ? '' : _URL$host,
      _URL$path = _URL.path,
      path = _URL$path === undefined ? '' : _URL$path,
      _URL$protocol = _URL.protocol,
      protocol = _URL$protocol === undefined ? '' : _URL$protocol;

  var url = host + path;

  // Validate config and throw appropriate error
  if (typeof url !== 'string' || url === '') {
    throw new Error('URL not present in options.');
  }
  if (typeof config.app !== 'string' || config.app === '') {
    throw new Error('App name is not present in options.');
  }
  if (typeof protocol !== 'string' || protocol === '') {
    throw new Error('Protocol is not present in url. URL should be of the form https://scalr.api.appbase.io');
  }
  // Parse url
  if (url.slice(-1) === '/') {
    url = url.slice(0, -1);
  }
  var credentials = auth || null;
  /**
   * Credentials can be provided as a part of the URL,
   * as username, password args or as a credentials argument directly */
  if (typeof config.credentials === 'string' && config.credentials !== '') {
    // eslint-disable-next-line
    credentials = config.credentials;
  } else if (typeof config.username === 'string' && config.username !== '' && typeof config.password === 'string' && config.password !== '') {
    credentials = config.username + ':' + config.password;
  }

  if (isAppbase(url) && credentials === null) {
    throw new Error('Authentication information is not present. Did you add credentials?');
  }
  this.url = url;
  this.protocol = protocol;
  this.app = config.app;
  this.credentials = credentials;
  this.headers = {};
}

/**
 * To perform fetch request
 * @param {Object} args
 * @param {String} args.method
 * @param {String} args.path
 * @param {Object} args.params
 * @param {Object} args.body
 */
function fetchRequest(args) {
  var _this = this;

  return new Promise(function (resolve, reject) {
    var parsedArgs = removeUndefined(args);
    try {
      var method = parsedArgs.method,
          path = parsedArgs.path,
          params = parsedArgs.params,
          body = parsedArgs.body;

      var bodyCopy = body;
      var contentType = path.endsWith('msearch') || path.endsWith('bulk') ? 'application/x-ndjson' : 'application/json';
      var headers = Object.assign({}, {
        Accept: 'application/json',
        'Content-Type': contentType
      }, _this.headers);
      var timestamp = Date.now();
      if (_this.credentials) {
        headers.Authorization = 'Basic ' + btoa(_this.credentials);
      }
      var requestOptions = {
        method: method,
        headers: headers
      };
      if (Array.isArray(bodyCopy)) {
        var arrayBody = '';
        bodyCopy.forEach(function (item) {
          arrayBody += JSON.stringify(item);
          arrayBody += '\n';
        });

        bodyCopy = arrayBody;
      } else {
        bodyCopy = JSON.stringify(bodyCopy) || {};
      }

      if (Object.keys(bodyCopy).length !== 0) {
        requestOptions.body = bodyCopy;
      }

      var finalRequest = requestOptions;
      if (_this.transformRequest) {
        finalRequest = _this.transformRequest(requestOptions);
      }
      var responseHeaders = {};
      return __WEBPACK_IMPORTED_MODULE_2_cross_fetch___default()(_this.protocol + '://' + _this.url + '/' + _this.app + '/' + path + '?' + __WEBPACK_IMPORTED_MODULE_1_querystring___default.a.stringify(params), finalRequest).then(function (res) {
        if (res.status >= 500) {
          return reject(res);
        }
        responseHeaders = res.headers;
        return res.json().then(function (data) {
          if (res.status >= 400) {
            return reject(res);
          }
          var response = Object.assign({}, data, {
            _timestamp: timestamp,
            _headers: responseHeaders
          });
          return resolve(response);
        });
      }).catch(function (e) {
        return reject(e);
      });
    } catch (e) {
      return reject(e);
    }
  });
}

var WebSocket = typeof window !== 'undefined' ? window.WebSocket : __webpack_require__("./node_modules/appbase-js/lib/ws-shim.js");

/**
 * To connect a web socket
 * @param {Object} args
 * @param {String} args.method
 * @param {String} args.path
 * @param {Object} args.params
 * @param {Object} args.body
 */
function wsRequest(args, onData, onError, onClose) {
  var _this = this;

  try {
    var parsedArgs = removeUndefined(args);
    var method = parsedArgs.method,
        path = parsedArgs.path,
        params = parsedArgs.params;

    var bodyCopy = args.body;
    if (!bodyCopy || (typeof bodyCopy === 'undefined' ? 'undefined' : _typeof(bodyCopy)) !== 'object') {
      bodyCopy = {};
    }
    var init = function init() {
      _this.ws = new WebSocket('wss://' + _this.url + '/' + _this.app);
      _this.id = uuidv4();

      _this.request = {
        id: _this.id,
        path: _this.app + '/' + path + '?' + __WEBPACK_IMPORTED_MODULE_1_querystring___default.a.stringify(params),
        method: method,
        body: bodyCopy
      };
      if (_this.credentials) {
        _this.request.authorization = 'Basic ' + btoa(_this.credentials);
      }
      _this.result = {};
      _this.closeHandler = function () {
        _this.wsClosed();
      };
      _this.errorHandler = function (err) {
        _this.processError.apply(_this, [err]);
      };
      _this.messageHandler = function (message) {
        var dataObj = JSON.parse(message.data);
        if (dataObj.body && dataObj.body.status >= 400) {
          _this.processError.apply(_this, [dataObj]);
        } else {
          _this.processMessage.apply(_this, [dataObj]);
        }
      };
      _this.send = function (request) {
        waitForSocketConnection(_this.ws, function () {
          try {
            _this.ws.send(JSON.stringify(request));
          } catch (e) {
            console.warn(e);
          }
        });
      };
      _this.ws.onmessage = _this.messageHandler;
      _this.ws.onerror = _this.errorHandler;
      _this.ws.onclose = _this.closeHandler;
      _this.send(_this.request);
      _this.result.stop = _this.stop;
      _this.result.reconnect = _this.reconnect;

      return _this.result;
    };
    this.wsClosed = function () {
      if (onClose) {
        onClose();
      }
    };
    this.stop = function () {
      _this.ws.onmessage = undefined;
      _this.ws.onclose = undefined;
      _this.ws.onerror = undefined;
      _this.wsClosed();
      var unsubRequest = JSON.parse(JSON.stringify(_this.request));
      unsubRequest.unsubscribe = true;

      if (_this.unsubscribed !== true) {
        _this.send(unsubRequest);
      }

      _this.unsubscribed = true;
    };
    this.reconnect = function () {
      _this.stop();
      return wsRequest(args, onData, onError, onClose);
    };
    this.processError = function (err) {
      if (onError) {
        onError(err);
      } else {
        console.warn(err);
      }
    };

    this.processMessage = function (origDataObj) {
      var dataObj = JSON.parse(JSON.stringify(origDataObj));
      if (!dataObj.id && dataObj.message) {
        if (onError) {
          onError(dataObj);
        }
        return;
      }

      if (dataObj.id === _this.id) {
        if (dataObj.message) {
          delete dataObj.id;
          if (onError) {
            onError(dataObj);
          }
          return;
        }

        if (dataObj.query_id) {
          _this.query_id = dataObj.query_id;
        }

        if (dataObj.channel) {
          _this.channel = dataObj.channel;
        }

        if (dataObj.body && dataObj.body !== '') {
          if (onData) {
            onData(dataObj.body);
          }
        }

        return;
      }

      if (!dataObj.id && dataObj.channel && dataObj.channel === _this.channel) {
        if (onData) {
          onData(dataObj.event);
        }
      }
    };
    return init();
  } catch (e) {
    if (onError) {
      onError(e);
    } else {
      console.warn(e);
    }
    return null;
  }
}

/**
 * Index Service
 * @param {Object} args
 * @param {String} args.type
 * @param {Object} args.body
 * @param {String} args.id
 */
function indexApi(args) {
  var parsedArgs = removeUndefined(args);
  // Validate arguments
  var valid = validate(parsedArgs, {
    type: 'string',
    body: 'object'
  });
  if (valid !== true) {
    throw valid;
  }
  var type = parsedArgs.type,
      id = parsedArgs.id,
      body = parsedArgs.body;


  delete parsedArgs.type;
  delete parsedArgs.body;
  delete parsedArgs.id;

  var path = void 0;
  if (id) {
    path = type + '/' + encodeURIComponent(id);
  } else {
    path = type;
  }
  return this.performFetchRequest({
    method: 'POST',
    path: path,
    params: parsedArgs,
    body: body
  });
}

/**
 * Get Service
 * @param {Object} args
 * @param {String} args.type
 * @param {String} args.id
 */
function getApi(args) {
  var parsedArgs = removeUndefined(args);
  // Validate arguments
  var valid = validate(parsedArgs, {
    type: 'string',
    id: 'string'
  });

  if (valid !== true) {
    throw valid;
  }

  var type = parsedArgs.type,
      id = parsedArgs.id;


  delete parsedArgs.type;
  delete parsedArgs.id;

  var path = type + '/' + encodeURIComponent(id);

  return this.performFetchRequest({
    method: 'GET',
    path: path,
    params: parsedArgs
  });
}

/**
 * Update Service
 * @param {Object} args
 * @param {String} args.type
 * @param {Object} args.body
 * @param {String} args.id
 */
function updateApi(args) {
  var parsedArgs = removeUndefined(args);
  // Validate arguments
  var valid = validate(parsedArgs, {
    type: 'string',
    id: 'string',
    body: 'object'
  });
  if (valid !== true) {
    throw valid;
  }

  var type = parsedArgs.type,
      id = parsedArgs.id,
      body = parsedArgs.body;

  delete parsedArgs.type;
  delete parsedArgs.id;
  delete parsedArgs.body;
  var path = type + '/' + encodeURIComponent(id) + '/_update';

  return this.performFetchRequest({
    method: 'POST',
    path: path,
    params: parsedArgs,
    body: body
  });
}

/**
 * Delete Service
 * @param {Object} args
 * @param {String} args.type
 * @param {String} args.id
 */
function deleteApi(args) {
  var parsedArgs = removeUndefined(args);
  // Validate arguments
  var valid = validate(parsedArgs, {
    type: 'string',
    id: 'string'
  });
  if (valid !== true) {
    throw valid;
  }

  var type = parsedArgs.type,
      id = parsedArgs.id;

  delete parsedArgs.type;
  delete parsedArgs.id;

  var path = type + '/' + encodeURIComponent(id);

  return this.performFetchRequest({
    method: 'DELETE',
    path: path,
    params: parsedArgs
  });
}

/**
 * Bulk Service
 * @param {Object} args
 * @param {String} args.type
 * @param {Object} args.body
 */
function bulkApi(args) {
  var parsedArgs = removeUndefined(args);
  // Validate arguments
  var valid = validate(parsedArgs, {
    body: 'object'
  });
  if (valid !== true) {
    throw valid;
  }

  var type = parsedArgs.type,
      body = parsedArgs.body;


  delete parsedArgs.type;
  delete parsedArgs.body;

  var path = void 0;
  if (type) {
    path = type + '/_bulk';
  } else {
    path = '/_bulk';
  }

  return this.performFetchRequest({
    method: 'POST',
    path: path,
    params: parsedArgs,
    body: body
  });
}

/**
 * Search Service
 * @param {Object} args
 * @param {String} args.type
 * @param {Object} args.body
 */
function searchApi(args) {
  var parsedArgs = removeUndefined(args);
  // Validate arguments
  var valid = validate(parsedArgs, {
    body: 'object'
  });
  if (valid !== true) {
    throw valid;
  }

  var type = void 0;
  if (Array.isArray(parsedArgs.type)) {
    type = parsedArgs.type.join();
  } else {
    // eslint-disable-next-line
    type = parsedArgs.type;
  }

  var body = parsedArgs.body;


  delete parsedArgs.type;
  delete parsedArgs.body;

  var path = void 0;
  if (type) {
    path = type + '/_search';
  } else {
    path = '_search';
  }

  return this.performFetchRequest({
    method: 'POST',
    path: path,
    params: parsedArgs,
    body: body
  });
}

/**
 * Msearch Service
 * @param {Object} args
 * @param {String} args.type
 * @param {Object} args.body
 */
function msearchApi(args) {
  var parsedArgs = removeUndefined(args);
  // Validate arguments
  var valid = validate(parsedArgs, {
    body: 'object'
  });
  if (valid !== true) {
    throw valid;
  }

  var type = void 0;
  if (Array.isArray(parsedArgs.type)) {
    type = parsedArgs.type.join();
  } else {
    type = parsedArgs.type;
  }

  var body = parsedArgs.body;


  delete parsedArgs.type;
  delete parsedArgs.body;

  var path = void 0;
  if (type) {
    path = type + '/_msearch';
  } else {
    path = '_msearch';
  }

  return this.performFetchRequest({
    method: 'POST',
    path: path,
    params: parsedArgs,
    body: body
  });
}

/**
 * Stream Service
 * @param {Object} args
 * @param {String} args.type
 * @param {Boolean} args.stream
 * @param {String} args.id
 * @param {Function} onData
 * @param {Function} onError
 * @param {Function} onClose
 */
function getStream(args) {
  var parsedArgs = removeUndefined(args);
  // Validate arguments
  var valid = validate(parsedArgs, {
    type: 'string',
    id: 'string'
  });
  if (valid !== true) {
    throw valid;
  }

  var type = parsedArgs.type,
      id = parsedArgs.id;


  delete parsedArgs.type;
  delete parsedArgs.id;
  delete parsedArgs.stream;

  if (parsedArgs.stream === true) {
    parsedArgs.stream = 'true';
  } else {
    delete parsedArgs.stream;
    parsedArgs.streamonly = 'true';
  }

  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return this.performWsRequest.apply(this, [{
    method: 'GET',
    path: type + '/' + encodeURIComponent(id),
    params: parsedArgs
  }].concat(rest));
}

/**
 * Search Stream
 * @param {Object} args
 * @param {String} args.type
 * @param {Object} args.body
 * @param {Boolean} args.stream
 * @param {Function} onData
 * @param {Function} onError
 * @param {Function} onClose
 */
function searchStreamApi(args) {
  var parsedArgs = removeUndefined(args);
  // Validate arguments
  var valid = validate(parsedArgs, {
    body: 'object'
  });
  if (valid !== true) {
    throw valid;
  }

  if (parsedArgs.type === undefined || Array.isArray(parsedArgs.type) && parsedArgs.type.length === 0) {
    throw new Error('Missing fields: type');
  }

  var type = void 0;
  if (Array.isArray(parsedArgs.type)) {
    type = parsedArgs.type.join();
  } else {
    type = parsedArgs.type;
  }

  var body = parsedArgs.body;

  delete parsedArgs.type;
  delete parsedArgs.body;
  delete parsedArgs.stream;

  parsedArgs.streamonly = 'true';

  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return this.performWsRequest.apply(this, [{
    method: 'POST',
    path: type + '/_search',
    params: parsedArgs,
    body: body
  }].concat(rest));
}

/**
 * Webhook Service
 * @param {Object} args
 * @param {String} args.type
 * @param {Object} args.body
 * @param {Object} webhook
 * @param {Function} onData
 * @param {Function} onError
 * @param {Function} onClose
 */
function searchStreamToURLApi(args, webhook) {
  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  var _this = this;

  var parsedArgs = removeUndefined(args);
  var bodyCopy = parsedArgs.body;
  var type = void 0;
  var typeString = void 0;
  // Validate arguments
  var valid = validate(parsedArgs, {
    body: 'object'
  });
  if (valid !== true) {
    throw valid;
  }

  if (parsedArgs.type === undefined || !(typeof parsedArgs.type === 'string' || Array.isArray(parsedArgs.type)) || parsedArgs.type === '' || parsedArgs.type.length === 0) {
    throw new Error('fields missing: type');
  }

  valid = validate(parsedArgs.body, {
    query: 'object'
  });
  if (valid !== true) {
    throw valid;
  }

  if (Array.isArray(parsedArgs.type)) {
    type = parsedArgs.type;

    typeString = parsedArgs.type.join();
  } else {
    type = [parsedArgs.type];
    typeString = parsedArgs.type;
  }

  var webhooks = [];
  var _bodyCopy = bodyCopy,
      query = _bodyCopy.query;


  if (typeof webhook === 'string') {
    var webHookObj = {};
    webHookObj.url = webhook;
    webHookObj.method = 'GET';
    webhooks.push(webHookObj);
  } else if (webhook.constructor === Array) {
    webhooks = webhook;
  } else if (webhook === Object(webhook)) {
    webhooks.push(webhook);
  } else {
    throw new Error('fields missing: second argument(webhook) is necessary');
  }

  var populateBody = function populateBody() {
    bodyCopy = {};
    bodyCopy.webhooks = webhooks;
    bodyCopy.query = query;
    bodyCopy.type = type;
  };

  populateBody();

  var encode64 = btoa(__WEBPACK_IMPORTED_MODULE_3_json_stable_stringify___default()(query));
  var path = '.percolator/webhooks-0-' + typeString + '-0-' + encode64;

  this.change = function () {
    webhooks = [];

    if (typeof parsedArgs === 'string') {
      var webhook2 = {};
      webhook2.url = parsedArgs;
      webhook2.method = 'POST';
      webhooks.push(webhook2);
    } else if (parsedArgs.constructor === Array) {
      webhooks = parsedArgs;
    } else if (parsedArgs === Object(parsedArgs)) {
      webhooks.push(parsedArgs);
    } else {
      throw new Error('fields missing: one of webhook or url fields is required');
    }

    populateBody();

    return _this.performRequest('POST');
  };
  this.stop = function () {
    bodyCopy = undefined;
    return _this.performRequest('DELETE');
  };
  this.performRequest = function (method) {
    var res = _this.performWsRequest.apply(_this, [{
      method: method,
      path: path,
      body: bodyCopy
    }].concat(rest));

    res.change = _this.change;
    res.stop = _this.stop;

    return res;
  };
  return this.performRequest('POST');
}

/**
 * To get types
 */
function getTypesService() {
  var _this = this;

  return new Promise(function (resolve, reject) {
    try {
      return _this.performFetchRequest({
        method: 'GET',
        path: '_mapping'
      }).then(function (data) {
        var types = Object.keys(data[_this.app].mappings).filter(function (type) {
          return type !== '_default_';
        });
        return resolve(types);
      });
    } catch (e) {
      return reject(e);
    }
  });
}

/**
 * To get mappings
 */
function getMappings() {
  return this.performFetchRequest({
    method: 'GET',
    path: '_mapping'
  });
}

function index (config) {
  var client = new AppBase(config);

  AppBase.prototype.performFetchRequest = fetchRequest;

  AppBase.prototype.performWsRequest = wsRequest;

  AppBase.prototype.index = indexApi;

  AppBase.prototype.get = getApi;

  AppBase.prototype.update = updateApi;

  AppBase.prototype.delete = deleteApi;

  AppBase.prototype.bulk = bulkApi;

  AppBase.prototype.search = searchApi;

  AppBase.prototype.msearch = msearchApi;

  AppBase.prototype.getStream = getStream;

  AppBase.prototype.searchStream = searchStreamApi;

  AppBase.prototype.searchStreamToURL = searchStreamToURLApi;

  AppBase.prototype.getTypes = getTypesService;

  AppBase.prototype.getMappings = getMappings;

  AppBase.prototype.setHeaders = function () {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var shouldEncode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    // Encode headers
    if (shouldEncode) {
      this.headers = encodeHeaders(headers);
    } else {
      this.headers = headers;
    }
  };

  if (typeof window !== 'undefined') {
    window.Appbase = client;
  }
  return client;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/appbase-js/lib/ws-shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ws = void 0;

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket;
} else if (typeof MozWebSocket !== 'undefined') {
  // eslint-disable-next-line
  ws = MozWebSocket;
} else {
  ws = window.WebSocket || window.MozWebSocket;
}

module.exports = ws;

/***/ }),

/***/ "./node_modules/create-emotion-styled/dist/index.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_is_prop_valid__ = __webpack_require__("./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var channel = '__EMOTION_THEMING__';

// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js

var _contextTypes;
var contextTypes = (_contextTypes = {}, _contextTypes[channel] = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object, _contextTypes);

function setTheme(theme) {
  this.setState({
    theme: theme
  });
}
var testPickPropsOnStringTag = __WEBPACK_IMPORTED_MODULE_1__emotion_is_prop_valid__["a" /* default */];
var testPickPropsOnComponent = function testPickPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};
var testAlwaysTrue = function testAlwaysTrue() {
  return true;
};
var pickAssign = function pickAssign(testFn, target) {
  var i = 2;
  var length = arguments.length;

  for (; i < length; i++) {
    var source = arguments[i];

    var _key = void 0;

    for (_key in source) {
      if (testFn(_key)) {
        target[_key] = source[_key];
      }
    }
  }

  return target;
};

var warnedAboutExtractStatic = false;

function createEmotionStyled(emotion, view) {
  var _createStyled = function createStyled(tag, options) {
    if (true) {
      if (tag === undefined) {
        throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
      }
    }

    var staticClassName;
    var identifierName;
    var stableClassName;
    var shouldForwardProp;

    if (options !== undefined) {
      staticClassName = options.e;
      identifierName = options.label;
      stableClassName = options.target;
      shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
        return tag.__emotion_forwardProp(propName) && // $FlowFixMe
        options.shouldForwardProp(propName);
      } : options.shouldForwardProp;
    }

    var isReal = tag.__emotion_real === tag;
    var baseTag = staticClassName === undefined ? isReal && tag.__emotion_base || tag : tag;

    if (typeof shouldForwardProp !== 'function') {
      shouldForwardProp = typeof baseTag === 'string' && baseTag.charAt(0) === baseTag.charAt(0).toLowerCase() ? testPickPropsOnStringTag : testPickPropsOnComponent;
    }

    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (staticClassName === undefined) {
        if (args[0] == null || args[0].raw === undefined) {
          styles.push.apply(styles, args);
        } else {
          styles.push(args[0][0]);
          var len = args.length;
          var i = 1;

          for (; i < len; i++) {
            styles.push(args[i], args[0][i]);
          }
        }
      } else if ("development" !== 'production' && !warnedAboutExtractStatic) {
        console.warn('extractStatic is deprecated and will be removed in emotion@10. We recommend disabling extractStatic or using other libraries like linaria or css-literal-loader');
        warnedAboutExtractStatic = true;
      }

      var Styled =
      /*#__PURE__*/
      function (_view$Component) {
        _inheritsLoose(Styled, _view$Component);

        function Styled() {
          return _view$Component.apply(this, arguments) || this;
        }

        var _proto = Styled.prototype;

        _proto.componentWillMount = function componentWillMount() {
          if (this.context[channel] !== undefined) {
            this.unsubscribe = this.context[channel].subscribe(setTheme.bind(this));
          }
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          if (this.unsubscribe !== undefined) {
            this.context[channel].unsubscribe(this.unsubscribe);
          }
        };

        _proto.render = function render() {
          var props = this.props,
              state = this.state;
          this.mergedProps = pickAssign(testAlwaysTrue, {}, props, {
            theme: state !== null && state.theme || props.theme || {}
          });
          var className = '';
          var classInterpolations = [];

          if (props.className) {
            if (staticClassName === undefined) {
              className += emotion.getRegisteredStyles(classInterpolations, props.className);
            } else {
              className += props.className + " ";
            }
          }

          if (staticClassName === undefined) {
            className += emotion.css.apply(this, styles.concat(classInterpolations));
          } else {
            className += staticClassName;
          }

          if (stableClassName !== undefined) {
            className += " " + stableClassName;
          }

          return view.createElement(baseTag, // $FlowFixMe
          pickAssign(shouldForwardProp, {}, props, {
            className: className,
            ref: props.innerRef
          }));
        };

        return Styled;
      }(view.Component);

      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";

      if (tag.defaultProps !== undefined) {
        // $FlowFixMe
        Styled.defaultProps = tag.defaultProps;
      }

      Styled.contextTypes = contextTypes;
      Styled.__emotion_styles = styles;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_real = Styled;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        value: function value() {
          if ("development" !== 'production' && stableClassName === undefined) {
            return 'NO_COMPONENT_SELECTOR';
          } // $FlowFixMe


          return "." + stableClassName;
        }
      });

      Styled.withComponent = function (nextTag, nextOptions) {
        return _createStyled(nextTag, nextOptions !== undefined ? // $FlowFixMe
        pickAssign(testAlwaysTrue, {}, options, nextOptions) : options).apply(void 0, styles);
      };

      return Styled;
    };
  };

  if ("development" !== 'production' && typeof Proxy !== 'undefined') {
    _createStyled = new Proxy(_createStyled, {
      get: function get(target, property) {
        switch (property) {
          // react-hot-loader tries to access this stuff
          case '__proto__':
          case 'name':
          case 'prototype':
          case 'displayName':
            {
              return target[property];
            }

          default:
            {
              throw new Error("You're trying to use the styled shorthand without babel-plugin-emotion." + ("\nPlease install and setup babel-plugin-emotion or use the function call syntax(`styled('" + property + "')` instead of `styled." + property + "`)"));
            }
        }
      }
    });
  }

  return _createStyled;
}

/* harmony default export */ __webpack_exports__["a"] = (createEmotionStyled);


/***/ }),

/***/ "./node_modules/create-emotion/dist/index.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_memoize__ = __webpack_require__("./node_modules/@emotion/memoize/dist/memoize.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_unitless__ = __webpack_require__("./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emotion_hash__ = __webpack_require__("./node_modules/@emotion/hash/dist/hash.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emotion_stylis__ = __webpack_require__("./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stylis_rule_sheet__ = __webpack_require__("./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stylis_rule_sheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_stylis_rule_sheet__);






var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = Object(__WEBPACK_IMPORTED_MODULE_0__emotion_memoize__["a" /* default */])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (__WEBPACK_IMPORTED_MODULE_1__emotion_unitless__["a" /* default */][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    return oldProcessStyleValue(key, value);
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (true) {
          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
        }

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = "development" === 'production'; // the big drawback here is that the css won't be editable in devtools

    this.tags = [];
    this.ctr = 0;
    this.opts = options;
  }

  var _proto = StyleSheet.prototype;

  _proto.inject = function inject() {
    if (this.injected) {
      throw new Error('already injected!');
    }

    this.tags[0] = makeStyleTag(this.opts);
    this.injected = true;
  };

  _proto.speedy = function speedy(bool) {
    if (this.ctr !== 0) {
      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
      throw new Error("cannot change speedy now");
    }

    this.isSpeedy = !!bool;
  };

  _proto.insert = function insert(rule, sourceMap) {
    // this is the ultrafast version, works across browsers
    if (this.isSpeedy) {
      var tag = this.tags[this.tags.length - 1];
      var sheet = sheetForTag(tag);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn('illegal rule', rule); // eslint-disable-line no-console
        }
      }
    } else {
      var _tag = makeStyleTag(this.opts);

      this.tags.push(_tag);

      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
    }

    this.ctr++;

    if (this.ctr % 65000 === 0) {
      this.tags.push(makeStyleTag(this.opts));
    }
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0; // todo - look for remnants in document.styleSheets

    this.injected = false;
  };

  return StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = __WEBPACK_IMPORTED_MODULE_4_stylis_rule_sheet___default()(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new __WEBPACK_IMPORTED_MODULE_3__emotion_stylis__["a" /* default */](stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && "development" !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    if (Array.isArray(obj)) {
      obj.forEach(function (interpolation) {
        string += handleInterpolation.call(this, interpolation, false);
      }, this);
    } else {
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'object') {
          if (caches.registered[obj[key]] !== undefined) {
            string += key + "{" + caches.registered[obj[key]] + "}";
          } else {
            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
            obj[key].forEach(function (value) {
              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
            });
          } else {
            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
          }
        }
      }, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createClassName = function createClassName(styles, identifierName) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__emotion_hash__["a" /* default */])(styles + identifierName) + identifierName;
  };

  if (true) {
    var oldCreateClassName = createClassName;
    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

    createClassName = function createClassName(styles, identifierName) {
      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
        currentSourceMap = sourceMap;
        return '';
      }), identifierName);
    };
  }

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = createClassName(styles, identifierName);
    return styles;
  };

  if (true) {
    var oldStylis = stylis;

    stylis = function stylis(selector, styles) {
      oldStylis(selector, styles);
      currentSourceMap = '';
    };
  }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, function (node) {
      // $FlowFixMe
      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
    });
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

/* harmony default export */ __webpack_exports__["a"] = (createEmotion);


/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/***/ (function(module, exports) {

var __root__ = (function (root) {
function F() { this.fetch = false; }
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : this);
(function(self) {

(function(self) {

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);
}).call(__root__, void(0));
var fetch = __root__.fetch;
var Response = fetch.Response = __root__.Response;
var Request = fetch.Request = __root__.Request;
var Headers = fetch.Headers = __root__.Headers;
if (typeof module === 'object' && module.exports) {
module.exports = fetch;
// Needed for TypeScript consumers without esModuleInterop.
module.exports.default = fetch;
}


/***/ }),

/***/ "./node_modules/downshift/dist/downshift.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



// istanbul ignore next
var statusDiv = typeof document === 'undefined' ? null : document.getElementById('a11y-status-message');

var statuses = [];

function setStatus(status) {
  var isSameAsLast = statuses[statuses.length - 1] === status;
  if (isSameAsLast) {
    statuses = [].concat(statuses, [status]);
  } else {
    statuses = [status];
  }
  var div = getStatusDiv();

  // Remove previous children
  while (div.lastChild) {
    div.removeChild(div.firstChild);
  }

  statuses.filter(Boolean).forEach(function (statusItem, index) {
    div.appendChild(getStatusChildDiv(statusItem, index));
  });
}

function getStatusChildDiv(status, index) {
  var display = index === statuses.length - 1 ? 'block' : 'none';

  var childDiv = document.createElement('div');
  childDiv.style.display = display;
  childDiv.textContent = status;

  return childDiv;
}

function getStatusDiv() {
  if (statusDiv) {
    return statusDiv;
  }
  statusDiv = document.createElement('div');
  statusDiv.setAttribute('id', 'a11y-status-message');
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'assertive');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  document.body.appendChild(statusDiv);
  return statusDiv;
}

var idCounter = 0;

/**
 * Accepts a parameter and returns it if it's a function
 * or a noop function if it's not. This allows us to
 * accept a callback, but not worry about it if it's not
 * passed.
 * @param {Function} cb the callback
 * @return {Function} a function
 */
function cbToCb(cb) {
  return typeof cb === 'function' ? cb : noop;
}
function noop() {}

function findParent(finder, node, rootNode) {
  if (node !== null && node !== rootNode.parentNode) {
    if (finder(node)) {
      if (node === document.body && node.scrollTop === 0) {
        // in chrome body.scrollTop always return 0
        return document.documentElement;
      }
      return node;
    } else {
      return findParent(finder, node.parentNode, rootNode);
    }
  } else {
    return null;
  }
}

/**
 * Get the closest element that scrolls
 * @param {HTMLElement} node - the child element to start searching for scroll parent at
 * @param {HTMLElement} rootNode - the root element of the component
 * @return {HTMLElement} the closest parentNode that scrolls
 */
var getClosestScrollParent = findParent.bind(null, function (node) {
  return node.scrollHeight > node.clientHeight;
});

/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node - the element that should scroll into view
 * @param {HTMLElement} rootNode - the root element of the component
 * @param {Boolean} alignToTop - align element to the top of the visible area of the scrollable ancestor
 */
// eslint-disable-next-line complexity
function scrollIntoView(node, rootNode) {
  var scrollParent = getClosestScrollParent(node, rootNode);
  if (scrollParent === null) {
    return;
  }
  var scrollParentStyles = getComputedStyle(scrollParent);
  var scrollParentRect = scrollParent.getBoundingClientRect();
  var scrollParentBorderTopWidth = parseInt(scrollParentStyles.borderTopWidth, 10);
  var scrollParentBorderBottomWidth = parseInt(scrollParentStyles.borderBottomWidth, 10);
  var bordersWidth = scrollParentBorderTopWidth + scrollParentBorderBottomWidth;
  var scrollParentTop = scrollParentRect.top + scrollParentBorderTopWidth;
  var nodeRect = node.getBoundingClientRect();

  if (nodeRect.top < 0 && scrollParentRect.top < 0) {
    scrollParent.scrollTop += nodeRect.top;
    return;
  }

  if (nodeRect.top < 0) {
    // the item is above the viewport and the parent is not above the viewport
    scrollParent.scrollTop += nodeRect.top - scrollParentTop;
    return;
  }

  if (nodeRect.top > 0 && scrollParentRect.top < 0) {
    if (scrollParentRect.bottom > 0 && nodeRect.bottom + bordersWidth > scrollParentRect.bottom) {
      // the item is below scrollable area
      scrollParent.scrollTop += nodeRect.bottom - scrollParentRect.bottom + bordersWidth;
    }
    // item and parent top are on different sides of view top border (do nothing)
    return;
  }

  var nodeOffsetTop = nodeRect.top + scrollParent.scrollTop;
  var nodeTop = nodeOffsetTop - scrollParentTop;
  if (nodeTop < scrollParent.scrollTop) {
    // the item is above the scrollable area
    scrollParent.scrollTop = nodeTop;
  } else if (nodeTop + nodeRect.height + bordersWidth > scrollParent.scrollTop + scrollParentRect.height) {
    // the item is below the scrollable area
    scrollParent.scrollTop = nodeTop + nodeRect.height - scrollParentRect.height + bordersWidth;
  }
  // the item is within the scrollable area (do nothing)
}

/**
 * @param {HTMLElement} parent the parent node
 * @param {HTMLElement} child the child node
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */
function isOrContainsNode(parent, child) {
  return parent === child || parent.contains(child);
}

/**
 * Simple debounce implementation. Will call the given
 * function once after the time given has passed since
 * it was last called.
 * @param {Function} fn the function to call after the time
 * @param {Number} time the time to wait
 * @return {Function} the debounced function
 */
function debounce(fn, time) {
  var timeoutId = void 0;
  return wrapper;
  function wrapper() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function () {
      timeoutId = null;
      fn.apply(undefined, args);
    }, time);
  }
}

/**
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them sets
 * `event.preventDownshiftDefault = true`.
 * @param {Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */
function composeEventHandlers() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (event) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return fns.some(function (fn) {
      fn && fn.apply(undefined, [event].concat(args));
      // TODO: remove everything after the || in the next breaking change
      return event.preventDownshiftDefault || event.defaultPrevented;
    });
  };
}

/**
 * This generates a unique ID for an instance of Downshift
 * @return {String} the unique ID
 */
function generateId() {
  return String(idCounter++);
}

/**
 * Resets idCounter to 0. Used for SSR.
 */
function resetIdCounter() {
  idCounter = 0;
}

/**
 * Returns the first argument that is not undefined
 * @param {...*} args the arguments
 * @return {*} the defined value
 */
function firstDefined() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return args.find(function (a) {
    return typeof a !== 'undefined';
  });
}

// eslint-disable-next-line complexity
function getA11yStatusMessage(_ref) {
  var isOpen = _ref.isOpen,
      highlightedItem = _ref.highlightedItem,
      selectedItem = _ref.selectedItem,
      resultCount = _ref.resultCount,
      previousResultCount = _ref.previousResultCount,
      itemToString = _ref.itemToString;

  if (!isOpen) {
    if (selectedItem) {
      return itemToString(selectedItem);
    } else {
      return '';
    }
  }

  if (!resultCount) {
    return 'No results.';
  } else if (!highlightedItem || resultCount !== previousResultCount) {
    return resultCount + ' ' + (resultCount === 1 ? 'result is' : 'results are') + ' available, use up and down arrow keys to navigate.';
  }
  return itemToString(highlightedItem);
}

/**
 * Takes an argument and if it's an array, returns the first item in the array
 * otherwise returns the argument
 * @param {*} arg the maybe-array
 * @param {*} defaultValue the value if arg is falsey not defined
 * @return {*} the arg or it's first item
 */
function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? /* istanbul ignore next (preact) */arg[0] : arg;
  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}

/**
 * @param {Object} element (P)react element
 * @return {Boolean} whether it's a DOM element
 */
function isDOMElement(element) {
  /* istanbul ignore if */
  if (element.nodeName) {
    // then this is preact
    return typeof element.nodeName === 'string';
  } else {
    // then we assume this is react
    return typeof element.type === 'string';
  }
}

/**
 * @param {Object} element (P)react element
 * @return {Object} the props
 */
function getElementProps(element) {
  // props for react, attributes for preact
  return element.props || /* istanbul ignore next (preact) */element.attributes;
}

/**
 * Throws a helpful error message for required properties. Useful
 * to be used as a default in destructuring or object params.
 * @param {String} fnName the function name
 * @param {String} propName the prop name
 */
function requiredProp(fnName, propName) {
  throw new Error('The property "' + propName + '" is required in "' + fnName + '"');
}

var stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
/**
 * @param {Object} state The state object
 * @return {Object} State that is relevant to downshift
 */
function pickState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var result = {};
  stateKeys.forEach(function (k) {
    if (state.hasOwnProperty(k)) {
      result[k] = state[k];
    }
  });
  return result;
}

/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a KeyboardEvent object
 * @return {String} keyboard key
 */
function normalizeArrowKey(event) {
  var key = event.key,
      keyCode = event.keyCode;
  /* istanbul ignore next (ie) */

  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return 'Arrow' + key;
  }
  return key;
}

/**
 * Simple check if the value passed is object literal
 * @param {*} obj any things
 * @return {Boolean} whether it's object literal
 */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/* eslint camelcase:0 */

var Downshift = function (_Component) {
  inherits(Downshift, _Component);

  function Downshift() {
    classCallCheck(this, Downshift);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

    _initialiseProps.call(_this);

    var state = _this.getState({
      highlightedIndex: _this.props.defaultHighlightedIndex,
      isOpen: _this.props.defaultIsOpen,
      inputValue: _this.props.defaultInputValue,
      selectedItem: _this.props.defaultSelectedItem
    });
    if (state.selectedItem != null) {
      state.inputValue = _this.props.itemToString(state.selectedItem);
    }
    _this.state = state;
    _this.id = _this.props.id || 'downshift-' + generateId();
    return _this;
  }
  // itemCount can be changed asynchronously
  // from within downshift (so it can't come from a prop)
  // this is why we store it as an instance and use
  // getItemCount rather than just use items.length
  // (to support windowing + async)


  /**
   * Gets the state based on internal state or props
   * If a state value is passed via props, then that
   * is the value given, otherwise it's retrieved from
   * stateToMerge
   *
   * This will perform a shallow merge of the given state object
   * with the state coming from props
   * (for the controlled component scenario)
   * This is used in state updater functions so they're referencing
   * the right state regardless of where it comes from.
   *
   * @param {Object} stateToMerge defaults to this.state
   * @return {Object} the state
   */
  Downshift.prototype.getState = function getState() {
    var _this2 = this;

    var stateToMerge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

    return Object.keys(stateToMerge).reduce(function (state, key) {
      state[key] = _this2.isControlledProp(key) ? _this2.props[key] : stateToMerge[key];
      return state;
    }, {});
  };

  /**
   * This determines whether a prop is a "controlled prop" meaning it is
   * state which is controlled by the outside of this component rather
   * than within this component.
   * @param {String} key the key to check
   * @return {Boolean} whether it is a controlled controlled prop
   */


  Downshift.prototype.isControlledProp = function isControlledProp(key) {
    return this.props[key] !== undefined;
  };

  Downshift.prototype.getItemCount = function getItemCount() {
    // things read better this way. They're in priority order:
    // 1. `this.itemCount`
    // 2. `this.props.itemCount`
    // 3. `this.items.length`
    /* eslint-disable no-negated-condition */
    if (this.itemCount != null) {
      return this.itemCount;
    } else if (this.props.itemCount !== undefined) {
      return this.props.itemCount;
    } else {
      return this.items.length;
    }
    /* eslint-enable no-negated-condition */
  };

  Downshift.prototype.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
    return this.props.environment.document.getElementById(this.getItemId(index));
  };

  Downshift.prototype.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
    /* istanbul ignore else (react-native) */
    {
      var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
      scrollIntoView(node, this._rootNode);
    }
  };

  Downshift.prototype.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
    if (this.getState().isOpen) {
      this.changeHighlightedIndex(amount, otherStateToSet);
    } else {
      this.setHighlightedIndex(undefined, _extends({ isOpen: true }, otherStateToSet));
    }
  };

  // eslint-disable-next-line complexity


  Downshift.prototype.changeHighlightedIndex = function changeHighlightedIndex(moveAmount, otherStateToSet) {
    var itemsLastIndex = this.getItemCount() - 1;
    if (itemsLastIndex < 0) {
      return;
    }

    var _getState = this.getState(),
        highlightedIndex = _getState.highlightedIndex;

    var baseIndex = highlightedIndex;
    if (baseIndex === null) {
      baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
    }
    var newIndex = baseIndex + moveAmount;
    if (newIndex < 0) {
      newIndex = itemsLastIndex;
    } else if (newIndex > itemsLastIndex) {
      newIndex = 0;
    }
    this.setHighlightedIndex(newIndex, otherStateToSet);
  };

  // any piece of our state can live in two places:
  // 1. Uncontrolled: it's internal (this.state)
  //    We will call this.setState to update that state
  // 2. Controlled: it's external (this.props)
  //    We will call this.props.onStateChange to update that state
  //
  // In addition, we'll call this.props.onChange if the
  // selectedItem is changed.


  Downshift.prototype.getStateAndHelpers = function getStateAndHelpers() {
    var _getState2 = this.getState(),
        highlightedIndex = _getState2.highlightedIndex,
        inputValue = _getState2.inputValue,
        selectedItem = _getState2.selectedItem,
        isOpen = _getState2.isOpen;

    var itemToString = this.props.itemToString;
    var id = this.id;
    var getRootProps = this.getRootProps,
        getButtonProps = this.getButtonProps,
        getToggleButtonProps = this.getToggleButtonProps,
        getLabelProps = this.getLabelProps,
        getInputProps = this.getInputProps,
        getItemProps = this.getItemProps,
        openMenu = this.openMenu,
        closeMenu = this.closeMenu,
        toggleMenu = this.toggleMenu,
        selectItem = this.selectItem,
        selectItemAtIndex = this.selectItemAtIndex,
        selectHighlightedItem = this.selectHighlightedItem,
        setHighlightedIndex = this.setHighlightedIndex,
        clearSelection = this.clearSelection,
        clearItems = this.clearItems,
        reset = this.reset,
        setItemCount = this.setItemCount,
        unsetItemCount = this.unsetItemCount,
        setState = this.internalSetState;

    return {
      // prop getters
      getRootProps: getRootProps,
      getButtonProps: getButtonProps,
      getToggleButtonProps: getToggleButtonProps,
      getLabelProps: getLabelProps,
      getInputProps: getInputProps,
      getItemProps: getItemProps,

      // actions
      reset: reset,
      openMenu: openMenu,
      closeMenu: closeMenu,
      toggleMenu: toggleMenu,
      selectItem: selectItem,
      selectItemAtIndex: selectItemAtIndex,
      selectHighlightedItem: selectHighlightedItem,
      setHighlightedIndex: setHighlightedIndex,
      clearSelection: clearSelection,
      clearItems: clearItems,
      setItemCount: setItemCount,
      unsetItemCount: unsetItemCount,
      setState: setState,

      //props
      itemToString: itemToString,

      //derived
      id: id,

      // state
      highlightedIndex: highlightedIndex,
      inputValue: inputValue,
      isOpen: isOpen,
      selectedItem: selectedItem
    };
  };

  //////////////////////////// ROOT

  //\\\\\\\\\\\\\\\\\\\\\\\\\\ ROOT

  //////////////////////////// BUTTON

  // TODO: remove this in 2.0.0 and just call it `getToggleButtonProps`


  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ BUTTON

  /////////////////////////////// LABEL

  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ LABEL

  /////////////////////////////// INPUT

  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ INPUT

  /////////////////////////////// ITEM
  Downshift.prototype.getItemId = function getItemId(index) {
    return this.id + '-item-' + index;
  };
  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ ITEM

  Downshift.prototype.componentDidMount = function componentDidMount() {
    var _this3 = this;

    // the _isMounted property is because we have `updateStatus` in a `debounce`
    // and we don't want to update the status if the component has been umounted
    this._isMounted = true;
    /* istanbul ignore if (react-native) */
    {
      // this.isMouseDown helps us track whether the mouse is currently held down.
      // This is useful when the user clicks on an item in the list, but holds the mouse
      // down long enough for the list to disappear (because the blur event fires on the input)
      // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
      // trigger hiding the menu.
      var onMouseDown = function () {
        _this3.isMouseDown = true;
      };
      var onMouseUp = function (event) {
        var document = _this3.props.environment.document;

        _this3.isMouseDown = false;
        var targetInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, event.target);
        var activeElementInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, document.activeElement);
        if (!targetInDownshift && !activeElementInDownshift && _this3.getState().isOpen) {
          _this3.reset({ type: Downshift.stateChangeTypes.mouseUp }, function () {
            return _this3.props.onOuterClick(_this3.getStateAndHelpers());
          });
        }
      };
      // Touching an element in iOS gives focus and hover states, but touching out of
      // the element will remove hover, and persist the focus state, resulting in the
      // blur event not being triggered.
      var onTouchStart = function (event) {
        var targetInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, event.target);
        if (!targetInDownshift && _this3.getState().isOpen) {
          _this3.reset({ type: Downshift.stateChangeTypes.touchStart }, function () {
            return _this3.props.onOuterClick(_this3.getStateAndHelpers());
          });
        }
      };

      this.props.environment.addEventListener('mousedown', onMouseDown);
      this.props.environment.addEventListener('mouseup', onMouseUp);
      this.props.environment.addEventListener('touchstart', onTouchStart);

      this.cleanup = function () {
        _this3._isMounted = false;
        _this3.props.environment.removeEventListener('mousedown', onMouseDown);
        _this3.props.environment.removeEventListener('mouseup', onMouseUp);
        _this3.props.environment.removeEventListener('touchstart', onTouchStart);
      };
    }
  };

  Downshift.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.isControlledProp('selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
      this.internalSetState({
        type: Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem,
        inputValue: this.props.itemToString(this.props.selectedItem)
      });
    }

    var current = this.props.highlightedIndex === undefined ? this.state : this.props;
    var prev = prevProps.highlightedIndex === undefined ? prevState : prevProps;

    if (current.highlightedIndex !== prev.highlightedIndex && !this.avoidScrolling) {
      this.scrollHighlightedItemIntoView();
    }

    this.updateStatus();
  };

  Downshift.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cleanup(); // avoids memory leak
  };

  // eslint-disable-next-line complexity


  Downshift.prototype.render = function render() {
    var children = unwrapArray(this.props.render || this.props.children, noop);
    // because the items are rerendered every time we call the children
    // we clear this out each render and
    this.clearItems();
    // we reset this so we know whether the user calls getRootProps during
    // this render. If they do then we don't need to do anything,
    // if they don't then we need to clone the element they return and
    // apply the props for them.
    this.getRootProps.called = false;
    this.getRootProps.refKey = undefined;
    this.getRootProps.suppressRefError = undefined;
    // we do something similar for getLabelProps
    this.getLabelProps.called = false;
    // and something similar for getInputProps
    this.getInputProps.called = false;
    var element = unwrapArray(children(this.getStateAndHelpers()));
    if (!element) {
      return null;
    }
    if (this.getRootProps.called) {
      if (!this.getRootProps.suppressRefError) {
        validateGetRootPropsCalledCorrectly(element, this.getRootProps);
      }
      return element;
    } else if (isDOMElement(element)) {
      // they didn't apply the root props, but we can clone
      // this and apply the props ourselves
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(element, this.getRootProps(getElementProps(element)));
    } else {
      // they didn't apply the root props, but they need to
      // otherwise we can't query around the autocomplete
      throw new Error('downshift: If you return a non-DOM element, you must use apply the getRootProps function');
    }
  };

  return Downshift;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Downshift.defaultProps = {
  defaultHighlightedIndex: null,
  defaultSelectedItem: null,
  defaultInputValue: '',
  defaultIsOpen: false,
  getA11yStatusMessage: getA11yStatusMessage,
  itemToString: function itemToString(i) {
    if (i == null) {
      return '';
    }
    if ("development" !== 'production' && isPlainObject(i)) {
      //eslint-disable-next-line no-console
      console.warn('downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.', 'The object that was passed:', i);
    }
    return String(i);
  },
  onStateChange: function onStateChange() {},
  onInputValueChange: function onInputValueChange() {},
  onUserAction: function onUserAction() {},
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  onOuterClick: function onOuterClick() {},
  selectedItemChanged: function selectedItemChanged(prevItem, item) {
    return prevItem !== item;
  },
  environment: typeof window === 'undefined' /* istanbul ignore next (ssr) */
  ? {} : window,
  stateReducer: function stateReducer(state, stateToSet) {
    return stateToSet;
  },
  breakingChanges: {}
};
Downshift.stateChangeTypes = {
  unknown: '__autocomplete_unknown__',
  mouseUp: '__autocomplete_mouseup__',
  itemMouseEnter: '__autocomplete_item_mouseenter__',
  keyDownArrowUp: '__autocomplete_keydown_arrow_up__',
  keyDownArrowDown: '__autocomplete_keydown_arrow_down__',
  keyDownEscape: '__autocomplete_keydown_escape__',
  keyDownEnter: '__autocomplete_keydown_enter__',
  clickItem: '__autocomplete_click_item__',
  blurInput: '__autocomplete_blur_input__',
  changeInput: '__autocomplete_change_input__',
  keyDownSpaceButton: '__autocomplete_keydown_space_button__',
  clickButton: '__autocomplete_click_button__',
  blurButton: '__autocomplete_blur_button__',
  controlledPropUpdatedSelectedItem: '__autocomplete_controlled_prop_updated_selected_item__',
  touchStart: '__autocomplete_touchstart__'
};

var _initialiseProps = function () {
  var _this4 = this;

  this.input = null;
  this.items = [];
  this.itemCount = null;
  this.previousResultCount = 0;

  this.setItemCount = function (count) {
    return _this4.itemCount = count;
  };

  this.unsetItemCount = function () {
    return _this4.itemCount = null;
  };

  this.setHighlightedIndex = function () {
    var highlightedIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.props.defaultHighlightedIndex;
    var otherStateToSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    otherStateToSet = pickState(otherStateToSet);
    _this4.internalSetState(_extends({ highlightedIndex: highlightedIndex }, otherStateToSet));
  };

  this.clearSelection = function (cb) {
    _this4.internalSetState({
      selectedItem: null,
      inputValue: '',
      isOpen: false
    }, cb);
  };

  this.selectItem = function (item, otherStateToSet, cb) {
    otherStateToSet = pickState(otherStateToSet);
    _this4.internalSetState(_extends({
      isOpen: false,
      highlightedIndex: _this4.props.defaultHighlightedIndex,
      selectedItem: item,
      inputValue: _this4.isControlledProp('selectedItem') && _this4.props.breakingChanges.resetInputOnSelection ? _this4.props.defaultInputValue : _this4.props.itemToString(item)
    }, otherStateToSet), cb);
  };

  this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
    var item = _this4.items[itemIndex];
    if (item == null) {
      return;
    }
    _this4.selectItem(item, otherStateToSet, cb);
  };

  this.selectHighlightedItem = function (otherStateToSet, cb) {
    return _this4.selectItemAtIndex(_this4.getState().highlightedIndex, otherStateToSet, cb);
  };

  this.internalSetState = function (stateToSet, cb) {
    var isItemSelected = void 0,
        onChangeArg = void 0;

    var onStateChangeArg = {};
    var isStateToSetFunction = typeof stateToSet === 'function';

    // we want to call `onInputValueChange` before the `setState` call
    // so someone controlling the `inputValue` state gets notified of
    // the input change as soon as possible. This avoids issues with
    // preserving the cursor position.
    // See https://github.com/paypal/downshift/issues/217 for more info.
    if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
      _this4.props.onInputValueChange(stateToSet.inputValue, _extends({}, _this4.getStateAndHelpers(), stateToSet));
    }
    return _this4.setState(function (state) {
      state = _this4.getState(state);
      var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;

      // Your own function that could modify the state that will be set.
      newStateToSet = _this4.props.stateReducer(state, newStateToSet);

      // checks if an item is selected, regardless of if it's different from
      // what was selected before
      // used to determine if onSelect and onChange callbacks should be called
      isItemSelected = newStateToSet.hasOwnProperty('selectedItem');
      // this keeps track of the object we want to call with setState
      var nextState = {};
      // this is just used to tell whether the state changed
      var nextFullState = {};
      // we need to call on change if the outside world is controlling any of our state
      // and we're trying to update that state. OR if the selection has changed and we're
      // trying to update the selection
      if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
        onChangeArg = newStateToSet.selectedItem;
      }
      newStateToSet.type = newStateToSet.type || Downshift.stateChangeTypes.unknown;

      Object.keys(newStateToSet).forEach(function (key) {
        // onStateChangeArg should only have the state that is
        // actually changing
        if (state[key] !== newStateToSet[key]) {
          onStateChangeArg[key] = newStateToSet[key];
        }
        // the type is useful for the onStateChangeArg
        // but we don't actually want to set it in internal state.
        // this is an undocumented feature for now... Not all internalSetState
        // calls support it and I'm not certain we want them to yet.
        // But it enables users controlling the isOpen state to know when
        // the isOpen state changes due to mouseup events which is quite handy.
        if (key === 'type') {
          return;
        }
        nextFullState[key] = newStateToSet[key];
        // if it's coming from props, then we don't care to set it internally
        if (!_this4.isControlledProp(key)) {
          nextState[key] = newStateToSet[key];
        }
      });

      // if stateToSet is a function, then we weren't able to call onInputValueChange
      // earlier, so we'll call it now that we know what the inputValue state will be.
      if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
        _this4.props.onInputValueChange(newStateToSet.inputValue, _extends({}, _this4.getStateAndHelpers(), newStateToSet));
      }

      return nextState;
    }, function () {
      // call the provided callback if it's a callback
      cbToCb(cb)();

      // only call the onStateChange and onChange callbacks if
      // we have relevant information to pass them.
      var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;
      if (hasMoreStateThanType) {
        _this4.props.onStateChange(onStateChangeArg, _this4.getStateAndHelpers());
      }

      if (isItemSelected) {
        _this4.props.onSelect(stateToSet.selectedItem, _this4.getStateAndHelpers());
      }

      if (onChangeArg !== undefined) {
        _this4.props.onChange(onChangeArg, _this4.getStateAndHelpers());
      }
      // this is currently undocumented and therefore subject to change
      // We'll try to not break it, but just be warned.
      _this4.props.onUserAction(onStateChangeArg, _this4.getStateAndHelpers());
    });
  };

  this.rootRef = function (node) {
    return _this4._rootNode = node;
  };

  this.getRootProps = function () {
    var _babelHelpers$extends;

    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$suppressRefErro = _ref3.suppressRefError,
        suppressRefError = _ref3$suppressRefErro === undefined ? false : _ref3$suppressRefErro;

    var _ref2$refKey = _ref2.refKey,
        refKey = _ref2$refKey === undefined ? 'ref' : _ref2$refKey,
        rest = objectWithoutProperties(_ref2, ['refKey']);

    // this is used in the render to know whether the user has called getRootProps.
    // It uses that to know whether to apply the props automatically
    _this4.getRootProps.called = true;
    _this4.getRootProps.refKey = refKey;
    _this4.getRootProps.suppressRefError = suppressRefError;
    return _extends((_babelHelpers$extends = {}, _babelHelpers$extends[refKey] = _this4.rootRef, _babelHelpers$extends), rest);
  };

  this.keyDownHandlers = {
    ArrowDown: function ArrowDown(event) {
      event.preventDefault();
      var amount = event.shiftKey ? 5 : 1;
      this.moveHighlightedIndex(amount, {
        type: Downshift.stateChangeTypes.keyDownArrowDown
      });
    },
    ArrowUp: function ArrowUp(event) {
      event.preventDefault();
      var amount = event.shiftKey ? -5 : -1;
      this.moveHighlightedIndex(amount, {
        type: Downshift.stateChangeTypes.keyDownArrowUp
      });
    },
    Enter: function Enter(event) {
      if (this.getState().isOpen) {
        event.preventDefault();
        var itemIndex = this.getState().highlightedIndex;
        var item = this.items[itemIndex];
        var itemNode = this.getItemNodeFromIndex(itemIndex);
        if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
          return;
        }
        this.selectHighlightedItem({
          type: Downshift.stateChangeTypes.keyDownEnter
        });
      }
    },
    Escape: function Escape(event) {
      event.preventDefault();
      this.reset({ type: Downshift.stateChangeTypes.keyDownEscape });
    }
  };
  this.buttonKeyDownHandlers = _extends({}, this.keyDownHandlers, {
    ' ': function _(event) {
      event.preventDefault();
      this.toggleMenu({ type: Downshift.stateChangeTypes.keyDownSpaceButton });
    }
  });

  this.getToggleButtonProps = function () {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var onClick = _ref4.onClick,
        onKeyDown = _ref4.onKeyDown,
        onBlur = _ref4.onBlur,
        rest = objectWithoutProperties(_ref4, ['onClick', 'onKeyDown', 'onBlur']);

    var _getState3 = _this4.getState(),
        isOpen = _getState3.isOpen;

    var enabledEventHandlers = {
      onClick: composeEventHandlers(onClick, _this4.button_handleClick),
      onKeyDown: composeEventHandlers(onKeyDown, _this4.button_handleKeyDown),
      onBlur: composeEventHandlers(onBlur, _this4.button_handleBlur)
    };
    var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
    return _extends({
      type: 'button',
      role: 'button',
      'aria-label': isOpen ? 'close menu' : 'open menu',
      'aria-expanded': isOpen,
      'aria-haspopup': true,
      'data-toggle': true
    }, eventHandlers, rest);
  };

  this.getButtonProps = this.getToggleButtonProps;

  this.button_handleKeyDown = function (event) {
    var key = normalizeArrowKey(event);
    if (_this4.buttonKeyDownHandlers[key]) {
      _this4.buttonKeyDownHandlers[key].call(_this4, event);
    }
  };

  this.button_handleClick = function (event) {
    event.preventDefault();
    // handle odd case for Safari and Firefox which
    // don't give the button the focus properly.
    /* istanbul ignore if (can't reasonably test this) */
    if (_this4.props.environment.document.activeElement === _this4.props.environment.document.body) {
      event.target.focus();
    }
    // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
    // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
    // when building for production and should therefore have no impact on production code.
    if (false) {
      _this4.toggleMenu({ type: Downshift.stateChangeTypes.clickButton });
    } else {
      // Ensure that toggle of menu occurs after the potential blur event in iOS
      setTimeout(function () {
        return _this4.toggleMenu({ type: Downshift.stateChangeTypes.clickButton });
      });
    }
  };

  this.button_handleBlur = function (event) {
    var blurTarget = event.target; // Save blur target for comparison with activeElement later
    // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element
    setTimeout(function () {
      if (!_this4.isMouseDown && (_this4.props.environment.document.activeElement == null || _this4.props.environment.document.activeElement.id !== _this4.inputId) && _this4.props.environment.document.activeElement !== blurTarget // Do nothing if we refocus the same element again (to solve issue in Safari on iOS)
      ) {
          _this4.reset({ type: Downshift.stateChangeTypes.blurButton });
        }
    });
  };

  this.getLabelProps = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _this4.getLabelProps.called = true;
    if (_this4.getInputProps.called && props.htmlFor && props.htmlFor !== _this4.inputId) {
      throw new Error('downshift: You provided the htmlFor of "' + props.htmlFor + '" for your label, but the id of your input is "' + _this4.inputId + '". You must either remove the id from your input or set the htmlFor of the label equal to the input id.');
    }
    _this4.inputId = firstDefined(_this4.inputId, props.htmlFor, _this4.id + '-input');
    return _extends({}, props, {
      htmlFor: _this4.inputId
    });
  };

  this.getInputProps = function () {
    var _ref6;

    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var onKeyDown = _ref5.onKeyDown,
        onBlur = _ref5.onBlur,
        onChange = _ref5.onChange,
        onInput = _ref5.onInput,
        rest = objectWithoutProperties(_ref5, ['onKeyDown', 'onBlur', 'onChange', 'onInput']);

    _this4.getInputProps.called = true;
    if (_this4.getLabelProps.called && rest.id && rest.id !== _this4.inputId) {
      throw new Error('downshift: You provided the id of "' + rest.id + '" for your input, but the htmlFor of your label is "' + _this4.inputId + '". You must either remove the id from your input or set the htmlFor of the label equal to the input id.');
    }
    _this4.inputId = firstDefined(_this4.inputId, rest.id, _this4.id + '-input');
    var onChangeKey = void 0;
    /* istanbul ignore next (preact) */
    onChangeKey = 'onChange';

    var _getState4 = _this4.getState(),
        inputValue = _getState4.inputValue,
        isOpen = _getState4.isOpen,
        highlightedIndex = _getState4.highlightedIndex;

    var eventHandlers = rest.disabled ? {} : (_ref6 = {}, _ref6[onChangeKey] = composeEventHandlers(onChange, onInput, _this4.input_handleChange), _ref6.onKeyDown = composeEventHandlers(onKeyDown, _this4.input_handleKeyDown), _ref6.onBlur = composeEventHandlers(onBlur, _this4.input_handleBlur), _ref6);
    return _extends({
      role: 'combobox',
      'aria-autocomplete': 'list',
      'aria-expanded': isOpen,
      'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this4.getItemId(highlightedIndex) : null,
      autoComplete: 'off',
      value: inputValue
    }, eventHandlers, rest, {
      id: _this4.inputId
    });
  };

  this.input_handleKeyDown = function (event) {
    var key = normalizeArrowKey(event);
    if (key && _this4.keyDownHandlers[key]) {
      _this4.keyDownHandlers[key].call(_this4, event);
    }
  };

  this.input_handleChange = function (event) {
    _this4.internalSetState({
      type: Downshift.stateChangeTypes.changeInput,
      isOpen: true,
      inputValue: event.target.value
    });
  };

  this.input_handleBlur = function () {
    // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
    setTimeout(function () {
      var downshiftButtonIsActive = _this4.props.environment.document.activeElement.dataset.toggle && _this4._rootNode && _this4._rootNode.contains(_this4.props.environment.document.activeElement);
      if (!_this4.isMouseDown && !downshiftButtonIsActive) {
        _this4.reset({ type: Downshift.stateChangeTypes.blurInput });
      }
    });
  };

  this.getItemProps = function () {
    var _enabledEventHandlers;

    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var onMouseMove = _ref7.onMouseMove,
        onMouseDown = _ref7.onMouseDown,
        onClick = _ref7.onClick,
        index = _ref7.index,
        _ref7$item = _ref7.item,
        item = _ref7$item === undefined ? requiredProp('getItemProps', 'item') : _ref7$item,
        rest = objectWithoutProperties(_ref7, ['onMouseMove', 'onMouseDown', 'onClick', 'index', 'item']);

    if (index === undefined) {
      _this4.items.push(item);
      index = _this4.items.indexOf(item);
    } else {
      _this4.items[index] = item;
    }

    var onSelectKey = 'onClick';

    var enabledEventHandlers = (_enabledEventHandlers = {
      // onMouseMove is used over onMouseEnter here. onMouseMove
      // is only triggered on actual mouse movement while onMouseEnter
      // can fire on DOM changes, interrupting keyboard navigation
      onMouseMove: composeEventHandlers(onMouseMove, function () {
        if (index === _this4.getState().highlightedIndex) {
          return;
        }
        _this4.setHighlightedIndex(index, {
          type: Downshift.stateChangeTypes.itemMouseEnter
        });

        // We never want to manually scroll when changing state based
        // on `onMouseMove` because we will be moving the element out
        // from under the user which is currently scrolling/moving the
        // cursor
        _this4.avoidScrolling = true;
        setTimeout(function () {
          return _this4.avoidScrolling = false;
        }, 250);
      }),
      onMouseDown: composeEventHandlers(onMouseDown, function (event) {
        // This prevents the activeElement from being changed
        // to the item so it can remain with the current activeElement
        // which is a more common use case.
        event.preventDefault();
      })
    }, _enabledEventHandlers[onSelectKey] = composeEventHandlers(onClick, function () {
      _this4.selectItemAtIndex(index, {
        type: Downshift.stateChangeTypes.clickItem
      });
    }), _enabledEventHandlers);

    var eventHandlers = rest.disabled ? {} : enabledEventHandlers;

    return _extends({
      id: _this4.getItemId(index)
    }, eventHandlers, rest);
  };

  this.clearItems = function () {
    _this4.items = [];
  };

  this.reset = function () {
    var otherStateToSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments[1];

    otherStateToSet = pickState(otherStateToSet);
    _this4.internalSetState(function (_ref8) {
      var selectedItem = _ref8.selectedItem;
      return _extends({
        isOpen: false,
        highlightedIndex: _this4.props.defaultHighlightedIndex,
        inputValue: _this4.props.itemToString(selectedItem)
      }, otherStateToSet);
    }, cbToCb(cb));
  };

  this.toggleMenu = function () {
    var otherStateToSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments[1];

    otherStateToSet = pickState(otherStateToSet);
    _this4.internalSetState(function (_ref9) {
      var isOpen = _ref9.isOpen;

      return _extends({ isOpen: !isOpen }, otherStateToSet);
    }, function () {
      var _getState5 = _this4.getState(),
          isOpen = _getState5.isOpen;

      if (isOpen) {
        // highlight default index
        _this4.setHighlightedIndex(undefined, otherStateToSet);
      }
      cbToCb(cb)();
    });
  };

  this.openMenu = function (cb) {
    _this4.internalSetState({ isOpen: true }, cbToCb(cb));
  };

  this.closeMenu = function (cb) {
    _this4.internalSetState({ isOpen: false }, cbToCb(cb));
  };

  this.updateStatus = debounce(function () {
    if (!_this4._isMounted) {
      return;
    }
    var state = _this4.getState();
    var item = _this4.items[state.highlightedIndex];
    var resultCount = _this4.getItemCount();
    var status = _this4.props.getA11yStatusMessage(_extends({
      itemToString: _this4.props.itemToString,
      previousResultCount: _this4.previousResultCount,
      resultCount: resultCount,
      highlightedItem: item
    }, state));
    _this4.previousResultCount = resultCount;
    /* istanbul ignore else (react-native) */
    setStatus(status);
  }, 200);
};

 true ? Downshift.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  defaultHighlightedIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  defaultSelectedItem: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  defaultInputValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  defaultIsOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  getA11yStatusMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  itemToString: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onStateChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onInputValueChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onUserAction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onOuterClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  selectedItemChanged: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  stateReducer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  itemCount: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  environment: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    addEventListener: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    removeEventListener: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    document: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      getElementById: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
      activeElement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
      body: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
    })
  }),
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components
  /* eslint-disable react/no-unused-prop-types */
  selectedItem: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  inputValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  highlightedIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  breakingChanges: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    resetInputOnSelection: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
  })
  /* eslint-enable */
} : void 0;

function validateGetRootPropsCalledCorrectly(element, _ref) {
  var refKey = _ref.refKey;

  var refKeySpecified = refKey !== 'ref';
  var isComposite = !isDOMElement(element);
  if (isComposite && !refKeySpecified) {
    throw new Error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
  } else if (!isComposite && refKeySpecified) {
    throw new Error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' + refKey + '"');
  }
  if (!getElementProps(element)[refKey]) {
    throw new Error('downshift: You must apply the ref prop "' + refKey + '" from getRootProps onto your root element.');
  }
}

/*
 * Fix importing in typescript after rollup compilation
 * https://github.com/rollup/rollup/issues/1156
 * https://github.com/Microsoft/TypeScript/issues/13017#issuecomment-268657860
 */
Downshift.default = Downshift;
Downshift.resetIdCounter = resetIdCounter;

/* harmony default export */ __webpack_exports__["default"] = (Downshift);


/***/ }),

/***/ "./node_modules/emotion-theming/dist/index.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contextTypes", function() { return contextTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBroadcast", function() { return createBroadcast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__("./node_modules/next/node_modules/hoist-non-react-statics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);




function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js
var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    for (var key in listeners) {
      // $FlowFixMe
      var listener = listeners[key];

      if (listener === undefined) {
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return {
    publish: publish,
    subscribe: subscribe,
    unsubscribe: unsubscribe
  };
};

var channel = '__EMOTION_THEMING__';

var _contextTypes;
var contextTypes = (_contextTypes = {}, _contextTypes[channel] = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object, _contextTypes);

var isPlainObject = function isPlainObject(test) {
  return Object.prototype.toString.call(test) === '[object Object]';
};

// Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
function getTheme(theme, outerTheme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if (!isPlainObject(mergedTheme)) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if (!isPlainObject(theme)) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  if (outerTheme === undefined) {
    return theme;
  }

  return _extends({}, outerTheme, theme);
}

var ThemeProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ThemeProvider, _Component);

  function ThemeProvider() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.componentWillMount = function componentWillMount() {
    var _this = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    if (this.context[channel] !== undefined) {
      this.unsubscribeToOuterId = this.context[channel].subscribe(function (theme) {
        _this.outerTheme = theme;

        if (_this.broadcast !== undefined) {
          _this.publish(_this.props.theme);
        }
      });
    }

    this.broadcast = createBroadcast(getTheme(this.props.theme, this.outerTheme));
  };

  _proto.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[channel] = {
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _ref;
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.publish(nextProps.theme);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var themeContext = this.context[channel];

    if (themeContext !== undefined) {
      themeContext.unsubscribe(this.unsubscribeToOuterId);
    }
  };

  _proto.publish = function publish(theme) {
    this.broadcast.publish(getTheme(theme, this.outerTheme));
  };

  _proto.render = function render() {
    if (!this.props.children) {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_1_react__["Children"].only(this.props.children);
  };

  ThemeProvider.childContextTypes = contextTypes;
  ThemeProvider.contextTypes = contextTypes;
  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var withTheme = function withTheme(Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name || 'Component';

  var WithTheme =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(WithTheme, _React$Component);

    function WithTheme(props) {
      return _React$Component.call(this, props) || this;
    }

    var _proto = WithTheme.prototype;

    _proto.componentWillMount = function componentWillMount() {
      var _this = this;

      var themeContext = this.context[channel];

      if (themeContext === undefined) {
        // eslint-disable-next-line no-console
        console.error('[withTheme] Please use ThemeProvider to be able to use withTheme');
        return;
      }

      this.unsubscribeId = themeContext.subscribe(function (theme) {
        _this.setState({
          theme: theme
        });
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[channel].unsubscribe(this.unsubscribeId);
      }
    };

    _proto.render = function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(Component$$1, _extends({
        theme: this.state.theme
      }, this.props));
    };

    return WithTheme;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  WithTheme.displayName = "WithTheme(" + componentName + ")";
  WithTheme.contextTypes = contextTypes;
  return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(WithTheme, Component$$1);
};




/***/ }),

/***/ "./node_modules/emotion/dist/index.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return caches; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_emotion__ = __webpack_require__("./node_modules/create-emotion/dist/index.esm.js");


var context = typeof global !== 'undefined' ? global : {};

var _createEmotion = Object(__WEBPACK_IMPORTED_MODULE_0_create_emotion__["a" /* default */])(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/json-stable-stringify/index.js":
/***/ (function(module, exports, __webpack_require__) {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__("./node_modules/jsonify/index.js");

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),

/***/ "./node_modules/jsonify/index.js":
/***/ (function(module, exports, __webpack_require__) {

exports.parse = __webpack_require__("./node_modules/jsonify/lib/parse.js");
exports.stringify = __webpack_require__("./node_modules/jsonify/lib/stringify.js");


/***/ }),

/***/ "./node_modules/jsonify/lib/parse.js":
/***/ (function(module, exports) {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),

/***/ "./node_modules/jsonify/lib/stringify.js":
/***/ (function(module, exports) {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }),

/***/ "./node_modules/polished/dist/polished.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustHue", function() { return curriedAdjustHue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImages", function() { return backgroundImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgrounds", function() { return backgrounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyle", function() { return borderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidth", function() { return borderWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFix", function() { return clearFix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return complement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return curriedDarken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desaturate", function() { return curriedDesaturate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionalProperty", function() { return directionalProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipsis", function() { return ellipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "em", function() { return em; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return fontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayscale", function() { return grayscale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideText", function() { return hideText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideVisually", function() { return hideVisually; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiDPI", function() { return hiDPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return curriedLighten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return curriedMix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modularScale", function() { return modularScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacify", function() { return curriedOpacify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToHsl", function() { return parseToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToRgb", function() { return parseToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeholder", function() { return placeholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radialGradient", function() { return radialGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readableColor", function() { return curriedReadableColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rem", function() { return rem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retinaImage", function() { return retinaImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturate", function() { return curriedSaturate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHue", function() { return curriedSetHue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLightness", function() { return curriedSetLightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSaturation", function() { return curriedSetSaturation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shade", function() { return curriedShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripUnit", function() { return stripUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInputs", function() { return textInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timingFunctions", function() { return timingFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tint", function() { return curriedTint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toColorString", function() { return toColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitions", function() { return transitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transparentize", function() { return curriedTransparentize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangle", function() { return triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordWrap", function() { return wordWrap; });
//      

// @private
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//      
var positionMap = ['Top', 'Right', 'Bottom', 'Left'];

function generateProperty(property, position) {
  if (!property) return position.toLowerCase();
  var splitProperty = property.split('-');
  if (splitProperty.length > 1) {
    splitProperty.splice(1, 0, position);
    return splitProperty.reduce(function (acc, val) {
      return '' + acc + capitalizeString(val);
    });
  }
  var joinedProperty = property.replace(/([a-z])([A-Z])/g, '$1' + position + '$2');
  return property === joinedProperty ? '' + property + position : joinedProperty;
}

function generateStyles(property, valuesWithDefaults) {
  var styles = {};
  for (var i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
    }
  }
  return styles;
}

/**
 * A helper that enables shorthand for direction based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */

function directionalProperty(property) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  //  prettier-ignore
  var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === undefined ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === undefined ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === undefined ? secondValue : _values$3;

  var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  return generateStyles(property, valuesWithDefaults);
}

//      

function endsWith (string, suffix) {
  return string.substr(-suffix.length) === suffix;
}

//      

/**
 * Strip the unit from a given CSS value, returning just the number. (or the original value if an invalid string was passed)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

function stripUnit(value) {
  var unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
}

//      

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */
var pxtoFactory = function pxtoFactory(to) {
  return function (pxval) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16px';

    var newPxval = pxval;
    var newBase = base;
    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new Error('Expected a string ending in "px" or a number passed as the first argument to ' + to + '(), got "' + pxval + '" instead.');
      }
      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new Error('Expected a string ending in "px" or a number passed as the second argument to ' + to + '(), got "' + base + '" instead.');
      }
      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new Error('Passed invalid pixel value ("' + pxval + '") to ' + to + '(), please pass a value like "12px" or 12.');
    }

    if (typeof newBase === 'string') {
      throw new Error('Passed invalid base value ("' + base + '") to ' + to + '(), please pass a value like "12px" or 12.');
    }

    return '' + newPxval / newBase + to;
  };
};

//      
/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

var em = /*#__PURE__*/pxtoFactory('em');

//      

var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4

  /** */

  /**
   * Establish consistent measurements and spacial relationships throughout your projects by incrementing up or down a defined scale. We provide a list of commonly used scales as pre-defined variables, see below.
   * @example
   * // Styles as object usage
   * const styles = {
   *    // Increment two steps up the default scale
   *   'fontSize': modularScale(2)
   * }
   *
   * // styled-components usage
   * const div = styled.div`
   *    // Increment two steps up the default scale
   *   fontSize: ${modularScale(2)}
   * `
   *
   * // CSS in JS Output
   *
   * element {
   *   'fontSize': '1.77689em'
   * }
   */
};function modularScale(steps) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1em';
  var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'perfectFourth';

  if (typeof steps !== 'number') {
    throw new Error('Please provide a number of steps to the modularScale helper.');
  }
  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new Error('Please pass a number or one of the predefined scales to the modularScale helper as the ratio.');
  }

  var realBase = typeof base === 'string' ? stripUnit(base) : base;
  var realRatio = typeof ratio === 'string' ? ratioNames[ratio] : ratio;

  if (typeof realBase === 'string') {
    throw new Error('Invalid value passed as base to modularScale, expected number or em string but got "' + base + '"');
  }

  return realBase * Math.pow(realRatio, steps) + 'em';
}

//      

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */

var rem = /*#__PURE__*/pxtoFactory('rem');

//      

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */

function clearFix() {
  var _ref;

  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '&';

  var pseudoSelector = parent + '::after';
  return _ref = {}, _ref[pseudoSelector] = {
    clear: 'both',
    content: '""',
    display: 'table'
  }, _ref;
}

//      

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */

function ellipsis() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '100%';

  return {
    display: 'inline-block',
    maxWidth: width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
  };
}

//      

/** */

function generateFileReferences(fontFilePath, fileFormats) {
  var fileFontReferences = fileFormats.map(function (format) {
    return 'url("' + fontFilePath + '.' + format + '")';
  });
  return fileFontReferences.join(', ');
}

function generateLocalReferences(localFonts) {
  var localFontReferences = localFonts.map(function (font) {
    return 'local("' + font + '")';
  });
  return localFontReferences.join(', ');
}

function generateSources(fontFilePath, localFonts, fileFormats) {
  var fontReferences = [];
  if (localFonts) fontReferences.push(generateLocalReferences(localFonts));
  if (fontFilePath) {
    fontReferences.push(generateFileReferences(fontFilePath, fileFormats));
  }
  return fontReferences.join(', ');
}

/**
 * CSS for a @font-face declaration.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro'
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * injectGlobal`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro'
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'fontFamily': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */

function fontFace(_ref) {
  var fontFamily = _ref.fontFamily,
      fontFilePath = _ref.fontFilePath,
      fontStretch = _ref.fontStretch,
      fontStyle = _ref.fontStyle,
      fontVariant = _ref.fontVariant,
      fontWeight = _ref.fontWeight,
      _ref$fileFormats = _ref.fileFormats,
      fileFormats = _ref$fileFormats === undefined ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
      localFonts = _ref.localFonts,
      unicodeRange = _ref.unicodeRange;

  // Error Handling
  if (!fontFamily) throw new Error('fontFace expects a name of a font-family.');
  if (!fontFilePath && !localFonts) {
    throw new Error('fontFace expects either the path to the font file(s) or a name of a local copy.');
  }
  if (localFonts && !Array.isArray(localFonts)) {
    throw new Error('fontFace expects localFonts to be an array.');
  }
  if (!Array.isArray(fileFormats)) {
    throw new Error('fontFace expects fileFormats to be an array.');
  }

  var fontFaceDeclaration = {
    '@font-face': {
      fontFamily: fontFamily,
      src: generateSources(fontFilePath, localFonts, fileFormats),
      unicodeRange: unicodeRange,
      fontStretch: fontStretch,
      fontStyle: fontStyle,
      fontVariant: fontVariant,
      fontWeight: fontWeight
    }

    // Removes undefined fields for cleaner css object.
  };return JSON.parse(JSON.stringify(fontFaceDeclaration));
}

//      

/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'backgroundImage': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   backgroundImage: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'backgroundImage': 'url(logo.png)',
 *   'textIndent': '101%',
 *   'overflow': 'hidden',
 *   'whiteSpace': 'nowrap',
 * }
 */

function hideText() {
  return {
    textIndent: '101%',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
}

//      

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...hideVisually(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hideVisually()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'border': '0',
 *   'clip': 'rect(0 0 0 0)',
 *   'clipPath': 'inset(50%)',
 *   'height': '1px',
 *   'margin': '-1px',
 *   'overflow': 'hidden',
 *   'padding': '0',
 *   'position': 'absolute',
 *   'whiteSpace': 'nowrap',
 *   'width': '1px',
 * }
 */

function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}

//      

/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */

function hiDPI() {
  var ratio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.3;

  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



























var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var _opinionatedRules;
var _abbrTitle;
var _unopinionatedRules;

//      
var opinionatedRules = (_opinionatedRules = {
  html: {
    fontFamily: 'sans-serif'
  },

  body: {
    margin: '0'
  }

}, _opinionatedRules['a:active,\n  a:hover'] = {
  outlineWidth: '0'
}, _opinionatedRules['button,\n  input,\n  optgroup,\n  select,\n  textarea'] = {
  fontFamily: 'sans-serif',
  fontSize: '100%',
  lineHeight: '1.15'
}, _opinionatedRules);

var unopinionatedRules = (_unopinionatedRules = {
  html: {
    lineHeight: '1.15',
    textSizeAdjust: '100%'
  }

}, _unopinionatedRules['article,\n  aside,\n  footer,\n  header,\n  nav,\n  section'] = {
  display: 'block'
}, _unopinionatedRules.h1 = {
  fontSize: '2em',
  margin: '0.67em 0'
}, _unopinionatedRules['figcaption,\n  figure,\n  main'] = {
  display: 'block'
}, _unopinionatedRules.figure = {
  margin: '1em 40px'
}, _unopinionatedRules.hr = {
  boxSizing: 'content-box',
  height: '0',
  overflow: 'visible'
}, _unopinionatedRules.pre = {
  fontFamily: 'monospace, monospace',
  fontSize: '1em'
}, _unopinionatedRules.a = {
  'background-color': 'transparent',
  '-webkit-text-decoration-skip': 'objects'
}, _unopinionatedRules['abbr[title]'] = (_abbrTitle = {
  borderBottom: 'none',
  textDecoration: 'underline'
}, _abbrTitle['textDecoration'] = 'underline dotted', _abbrTitle), _unopinionatedRules['b,\n  strong'] = {
  fontWeight: 'inherit'
}, _unopinionatedRules['code,\n  kbd,\n  samp'] = {
  fontFamily: 'monospace, monospace',
  fontSize: '1em'
}, _unopinionatedRules.dfn = {
  fontStyle: 'italic'
}, _unopinionatedRules.mark = {
  backgroundColor: '#ff0',
  color: '#000'
}, _unopinionatedRules.small = {
  fontSize: '80%'
}, _unopinionatedRules['sub,\n  sup'] = {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline'
}, _unopinionatedRules.sub = {
  bottom: '-0.25em'
}, _unopinionatedRules.sup = {
  top: '-0.5em'
}, _unopinionatedRules['audio,\n  video'] = {
  display: 'inline-block'
}, _unopinionatedRules['audio:not([controls])'] = {
  display: 'none',
  height: '0'
}, _unopinionatedRules.img = {
  borderStyle: 'none'
}, _unopinionatedRules['svg:not(:root)'] = {
  overflow: 'hidden'
}, _unopinionatedRules['button,\n  input,\n  optgroup,\n  select,\n  textarea'] = {
  margin: '0'
}, _unopinionatedRules['button,\n  input'] = {
  overflow: 'visible'
}, _unopinionatedRules['button,\n  select'] = {
  textTransform: 'none'
}, _unopinionatedRules['button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"]'] = {
  '-webkit-appearance': 'button'
}, _unopinionatedRules['button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner'] = {
  borderStyle: 'none',
  padding: '0'
}, _unopinionatedRules['button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring'] = {
  outline: '1px dotted ButtonText'
}, _unopinionatedRules.fieldset = {
  border: '1px solid #c0c0c0',
  margin: '0 2px',
  padding: '0.35em 0.625em 0.75em'
}, _unopinionatedRules.legend = {
  boxSizing: 'border-box',
  color: 'inherit',
  display: 'table',
  maxWidth: '100%',
  padding: '0',
  whiteSpace: 'normal'
}, _unopinionatedRules.progress = {
  display: 'inline-block',
  verticalAlign: 'baseline'
}, _unopinionatedRules.textarea = {
  overflow: 'auto'
}, _unopinionatedRules['[type="checkbox"],\n  [type="radio"]'] = {
  boxSizing: 'border-box',
  padding: '0'
}, _unopinionatedRules['[type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button'] = {
  height: 'auto'
}, _unopinionatedRules['[type="search"]'] = {
  '-webkit-appearance': 'textfield',
  outlineOffset: '-2px'
}, _unopinionatedRules['[type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration'] = {
  '-webkit-appearance': 'none'
}, _unopinionatedRules['::-webkit-file-upload-button'] = {
  '-webkit-appearance': 'button',
  font: 'inherit'
}, _unopinionatedRules['details,\n  menu'] = {
  display: 'block'
}, _unopinionatedRules.summary = {
  display: 'list-item'
}, _unopinionatedRules.canvas = {
  display: 'inline-block'
}, _unopinionatedRules.template = {
  display: 'none'
}, _unopinionatedRules['[hidden]'] = {
  display: 'none'
}, _unopinionatedRules);

function mergeRules(baseRules, additionalRules) {
  var mergedRules = _extends({}, baseRules);
  Object.keys(additionalRules).forEach(function (key) {
    if (mergedRules[key]) {
      mergedRules[key] = _extends({}, mergedRules[key], additionalRules[key]);
    } else {
      mergedRules[key] = _extends({}, additionalRules[key]);
    }
  });
  return mergedRules;
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * injectGlobal`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   fontFamily: 'sans-serif',
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize(excludeOpinionated) {
  if (excludeOpinionated) return unopinionatedRules;
  return mergeRules(unopinionatedRules, opinionatedRules);
}

//      

/**
 * CSS to style the placeholder pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder({'color': 'blue'})
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder({'color': 'blue'})}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */

function placeholder(styles) {
  var _ref;

  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';

  return _ref = {}, _ref[parent + '::-webkit-input-placeholder'] = _extends({}, styles), _ref[parent + ':-moz-placeholder'] = _extends({}, styles), _ref[parent + '::-moz-placeholder'] = _extends({}, styles), _ref[parent + ':-ms-input-placeholder'] = _extends({}, styles), _ref;
}

var _templateObject = /*#__PURE__*/ taggedTemplateLiteralLoose(['radial-gradient(', '', '', '', ')'], ['radial-gradient(', '', '', '', ')']);

//      

/** */

function parseFallback(colorStops) {
  return colorStops[0].split(' ')[0];
}

function constructGradientValue(literals) {
  var template = '';
  for (var i = 0; i < literals.length; i += 1) {
    template += literals[i];
    // Adds leading coma if properties preceed color-stops
    if (i === 3 && (arguments.length <= i + 1 ? undefined : arguments[i + 1]) && ((arguments.length <= 1 ? undefined : arguments[1]) || (arguments.length <= 2 ? undefined : arguments[2]) || (arguments.length <= 3 ? undefined : arguments[3]))) {
      template = template.slice(0, -1);
      template += ', ' + (arguments.length <= i + 1 ? undefined : arguments[i + 1]);
      // No trailing space if color-stops is the only param provided
    } else if (i === 3 && (arguments.length <= i + 1 ? undefined : arguments[i + 1]) && !(arguments.length <= 1 ? undefined : arguments[1]) && !(arguments.length <= 2 ? undefined : arguments[2]) && !(arguments.length <= 3 ? undefined : arguments[3])) {
      template += '' + (arguments.length <= i + 1 ? undefined : arguments[i + 1]);
      // Only adds substitution if it is defined
    } else if (arguments.length <= i + 1 ? undefined : arguments[i + 1]) {
      template += (arguments.length <= i + 1 ? undefined : arguments[i + 1]) + ' ';
    }
  }
  return template.trim();
}

/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#00FFFF',
 *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */

function radialGradient(_ref) {
  var colorStops = _ref.colorStops,
      extent = _ref.extent,
      fallback = _ref.fallback,
      position = _ref.position,
      shape = _ref.shape;

  if (!colorStops || colorStops.length < 2) {
    throw new Error('radialGradient requries at least 2 color-stops to properly render.');
  }
  return {
    backgroundColor: fallback || parseFallback(colorStops),
    backgroundImage: constructGradientValue(_templateObject, position, shape, extent, colorStops.join(', '))
  };
}

//      

/**
 * A helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */
function retinaImage(filename, backgroundSize) {
  var extension = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'png';

  var _ref;

  var retinaFilename = arguments[3];
  var retinaSuffix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '_2x';

  if (!filename) {
    throw new Error('Please supply a filename to retinaImage() as the first argument.');
  }
  // Replace the dot at the beginning of the passed extension if one exists
  var ext = extension.replace(/^\./, '');
  var rFilename = retinaFilename ? retinaFilename + '.' + ext : '' + filename + retinaSuffix + '.' + ext;

  return _ref = {
    backgroundImage: 'url(' + filename + '.' + ext + ')'
  }, _ref[hiDPI()] = {
    backgroundImage: 'url(' + rFilename + ')',
    backgroundSize: backgroundSize
  }, _ref;
}

//      

/**
 * CSS to style the selection pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...selection({
 *     'backgroundColor': 'blue'
 *   }, 'section')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${selection({'backgroundColor': 'blue'}, 'section')}
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'section::-moz-selection': {
 *     'backgroundColor':'blue',
 *   },
 *   'section::selection': {
 *     'backgroundColor': 'blue',
 *   }
 * }
 */

function selection(styles) {
  var _ref;

  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return _ref = {}, _ref[parent + '::-moz-selection'] = _extends({}, styles), _ref[parent + '::selection'] = _extends({}, styles), _ref;
}

//      

/* eslint-disable key-spacing */
var functionsMap = {
  easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  easeInCirc: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  easeInCubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  easeInExpo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  easeInQuad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  easeInQuart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  easeInQuint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  easeInSine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',

  easeOutBack: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  easeOutCubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  easeOutCirc: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  easeOutExpo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  easeOutQuad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  easeOutQuart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  easeOutQuint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  easeOutSine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',

  easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  easeInOutCirc: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  easeInOutCubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  easeInOutExpo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  easeInOutQuad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  easeInOutQuart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  easeInOutQuint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  easeInOutSine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
  /* eslint-enable key-spacing */

  /** */

  /**
   * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
   *
   * @example
   * // Styles as object usage
   * const styles = {
   *   'transitionTimingFunction': timingFunctions('easeInQuad')
   * }
   *
   * // styled-components usage
   *  const div = styled.div`
   *   transitionTimingFunction: ${timingFunctions('easeInQuad')};
   * `
   *
   * // CSS as JS Output
   *
   * 'div': {
   *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
   * }
   */

};function timingFunctions(timingFunction) {
  return functionsMap[timingFunction];
}

//      

/** */

var getBorderWidth = function getBorderWidth(pointingDirection, height, width) {
  switch (pointingDirection) {
    case 'top':
      return '0 ' + width / 2 + 'px ' + height + 'px ' + width / 2 + 'px';
    case 'left':
      return height / 2 + 'px ' + width + 'px ' + height / 2 + 'px 0';
    case 'bottom':
      return height + 'px ' + width / 2 + 'px 0 ' + width / 2 + 'px';
    case 'right':
      return height / 2 + 'px 0 ' + height / 2 + 'px ' + width + 'px';

    default:
      throw new Error("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.");
  }
};

// needed for border-color
var reverseDirection = {
  left: 'Right',
  right: 'Left',
  top: 'Bottom',
  bottom: 'Top'

  /**
   * CSS to represent triangle with any pointing direction with an optional background color. Accepts number or px values for height and width.
   *
   * @example
   * // Styles as object usage
   *
   * const styles = {
   *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
   * }
   *
   *
   * // styled-components usage
   * const div = styled.div`
   *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
   *
   *
   * // CSS as JS Output
   *
   * div: {
   *  'borderColor': 'transparent',
   *  'borderLeftColor': 'red !important',
   *  'borderStyle': 'solid',
   *  'borderWidth': '50px 0 50px 100px',
   *  'height': '0',
   *  'width': '0',
   * }
   */

};function triangle(_ref) {
  var _ref2;

  var pointingDirection = _ref.pointingDirection,
      height = _ref.height,
      width = _ref.width,
      foregroundColor = _ref.foregroundColor,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === undefined ? 'transparent' : _ref$backgroundColor;

  var unitlessHeight = parseFloat(height);
  var unitlessWidth = parseFloat(width);
  if (isNaN(unitlessHeight) || isNaN(unitlessWidth)) {
    throw new Error('Passed an invalid value to `height` or `width`. Please provide a pixel based unit');
  }

  return _ref2 = {
    borderColor: backgroundColor,
    width: '0',
    height: '0',
    borderWidth: getBorderWidth(pointingDirection, unitlessHeight, unitlessWidth),
    borderStyle: 'solid'
  }, _ref2['border' + reverseDirection[pointingDirection] + 'Color'] = foregroundColor + ' !important', _ref2;
}

//      

/**
 * Provides an easy way to change the `wordWrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-word')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-word')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflowWrap: 'break-word',
 *   wordWrap: 'break-word',
 *   wordBreak: 'break-all',
 * }
 */

function wordWrap() {
  var wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'break-word';

  var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak: wordBreak
  };
}

//      


function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness) {
  var convert = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : convertToInt;

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  }

  // formular from https://en.wikipedia.org/wiki/HSL_and_HSV
  var huePrime = hue % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));

  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

//      
var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'

  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */
};function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? '#' + namedColorMap[normalizedColorName] : color;
}

//      
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;

/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = 'rgb(255, 0, 0)';
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = 'hsla(210, 10%, 40%, 0.75)';
 */
function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt('' + rgbMatched[1], 10),
      green: parseInt('' + rgbMatched[2], 10),
      blue: parseInt('' + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor);
  if (rgbaMatched) {
    return {
      red: parseInt('' + rgbaMatched[1], 10),
      green: parseInt('' + rgbaMatched[2], 10),
      blue: parseInt('' + rgbaMatched[3], 10),
      alpha: parseFloat('' + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt('' + hslMatched[1], 10);
    var saturation = parseInt('' + hslMatched[2], 10) / 100;
    var lightness = parseInt('' + hslMatched[3], 10) / 100;
    var rgbColorString = 'rgb(' + hslToRgb(hue, saturation, lightness) + ')';
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new Error('Couldn\'t generate valid rgb string from ' + normalizedColor + ', it returned ' + rgbColorString + '.');
    }
    return {
      red: parseInt('' + hslRgbMatched[1], 10),
      green: parseInt('' + hslRgbMatched[2], 10),
      blue: parseInt('' + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor);
  if (hslaMatched) {
    var _hue = parseInt('' + hslaMatched[1], 10);
    var _saturation = parseInt('' + hslaMatched[2], 10) / 100;
    var _lightness = parseInt('' + hslaMatched[3], 10) / 100;
    var _rgbColorString = 'rgb(' + hslToRgb(_hue, _saturation, _lightness) + ')';
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new Error('Couldn\'t generate valid rgb string from ' + normalizedColor + ', it returned ' + _rgbColorString + '.');
    }
    return {
      red: parseInt('' + _hslRgbMatched[1], 10),
      green: parseInt('' + _hslRgbMatched[2], 10),
      blue: parseInt('' + _hslRgbMatched[3], 10),
      alpha: parseFloat('' + hslaMatched[4])
    };
  }
  throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.");
}

//      


function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;

  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return { hue: 0, saturation: 0, lightness: lightness };
    }
  }

  var hue = void 0;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;
  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }
  return { hue: hue, saturation: saturation, lightness: lightness };
}

//      

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = 'rgb(255, 0, 0)';
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = 'hsla(210, 10%, 40%, 0.75)';
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

//      

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }
  return value;
};

//      
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue('#' + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue('#' + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new Error('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).');
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return 'rgba(' + rgbValue.red + ',' + rgbValue.green + ',' + rgbValue.blue + ',' + secondValue + ')';
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : 'rgba(' + firstValue + ',' + secondValue + ',' + thirdValue + ',' + fourthValue + ')';
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : 'rgba(' + firstValue.red + ',' + firstValue.green + ',' + firstValue.blue + ',' + firstValue.alpha + ')';
  }

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).');
}

//      
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue('#' + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new Error('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).');
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : 'rgba(' + hslToRgb(value, saturation, lightness) + ',' + alpha + ')';
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : 'rgba(' + hslToRgb(value.hue, value.saturation, value.lightness) + ',' + value.alpha + ')';
  }

  throw new Error('Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).');
}

//      
var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};

var errMsg = 'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.';

/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */

function toColorString(color) {
  if (typeof color !== 'object') throw new Error(errMsg);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);

  throw new Error(errMsg);
}

//      

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js


// eslint-disable-next-line no-unused-vars


// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-redeclare


function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
}

// eslint-disable-next-line no-redeclare
function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

//      

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue(180, 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue(180, 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */
function adjustHue(degree, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: (hslColor.hue + degree) % 360
  }));
}

var curriedAdjustHue = /*#__PURE__*/curry(adjustHue);

//      

/**
 * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: complement('#448'),
 *   background: complement('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${complement('#448')};
 *   background: ${complement('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#884";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */
function complement(color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: (hslColor.hue + 180) % 360
  }));
}

//      

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

//      

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken(0.2, 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken(0.2, 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */
function darken(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - amount)
  }));
}

var curriedDarken = /*#__PURE__*/curry(darken);

//      

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */
function desaturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - amount)
  }));
}

var curriedDesaturate = /*#__PURE__*/curry(desaturate);

//      
/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */
function getLuminance(color) {
  var rgbColor = parseToRgb(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }),
      r = _Object$keys$map[0],
      g = _Object$keys$map[1],
      b = _Object$keys$map[2];

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

//      

/**
 * Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */
function grayscale(color) {
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: 0
  }));
}

//      

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert('#CCCD64'),
 *   background: invert('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert('#CCCD64')};
 *   background: ${invert('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */
function invert(color) {
  // parse color string to rgb
  var value = parseToRgb(color);
  return toColorString(_extends({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}

//      

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */
function lighten(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + amount)
  }));
}

var curriedLighten = /*#__PURE__*/curry(lighten);

//      

/**
 * Mixes two colors together by calculating the average of each of the RGB components.
 *
 * By default the weight is 0.5 meaning that half of the first color and half the second
 * color should be used. Optionally the weight can be modified by providing a number
 * as the first argument. 0.25 means that a quarter of the first color and three quarters
 * of the second color should be used.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */
function mix() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
  var color = arguments[1];
  var otherColor = arguments[2];

  var parsedColor1 = parseToRgb(color);
  var color1 = _extends({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);
  var color2 = _extends({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1

    // The formular is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
  });var alphaDelta = color1.alpha - color2.alpha;
  var x = weight * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;

  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (weight / 1.0)
  };

  return rgba(mixedColor);
}

var curriedMix = /*#__PURE__*/curry(mix);

//      
/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify(0.5, 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify(0.5, 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */
function opacify(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + amount * 100) / 100)
  });
  return rgba(colorWithAlpha);
}

var curriedOpacify = /*#__PURE__*/curry(opacify);

//      
/**
 * Selects black or white for best contrast depending on the luminosity of the given color.
 * Follows W3C specs for readability at https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('papayawhip'),
 *   color: readableColor('rgb(255,0,0)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('papayawhip')};
 *   color: ${readableColor('rgb(255,0,0)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   color: "#fff";
 *   color: "#fff";
 *   color: "#000";
 * }
 */

function readableColor(color) {
  return getLuminance(color) > 0.179 ? '#000' : '#fff';
}

var curriedReadableColor = /*#__PURE__*/curry(readableColor);

//      

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */
function saturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + amount)
  }));
}

var curriedSaturate = /*#__PURE__*/curry(saturate);

//      

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue(244, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue(244, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */
function setHue(hue, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    hue: hue
  }));
}

var curriedSetHue = /*#__PURE__*/curry(setHue);

//      

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness(0.75, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness(0.75, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */
function setLightness(lightness, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    lightness: lightness
  }));
}

var curriedSetLightness = /*#__PURE__*/curry(setLightness);

//      

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation(0.75, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation(0.75, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */
function setSaturation(saturation, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: saturation
  }));
}

var curriedSetSaturation = /*#__PURE__*/curry(setSaturation);

//      

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) {
    throw new Error('Passed an incorrect argument to shade, please pass a percentage less than or equal to 1 and larger than or equal to -1.');
  }
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }
  return curriedMix(percentage, color, 'rgb(0, 0, 0)');
}

var curriedShade = /*#__PURE__*/curry(shade);

//      

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) {
    throw new Error('Passed an incorrect argument to tint, please pass a percentage less than or equal to 1 and larger than or equal to -1.');
  }
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }
  return curriedMix(percentage, color, 'rgb(255, 255, 255)');
}

var curriedTint = /*#__PURE__*/curry(tint);

//      
/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize(0.5, 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize(0.5, 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */
function transparentize(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - amount * 100) / 100)
  });
  return rgba(colorWithAlpha);
}

var curriedTransparentize = /*#__PURE__*/curry(transparentize);

//      

/** */

/**
 * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
 * or a single animation spread over the arguments.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
 * }
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */
function animation() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Allow single or multiple animations passed
  var multiMode = Array.isArray(args[0]);
  if (!multiMode && args.length > 8) {
    throw new Error('The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation');
  }
  var code = args.map(function (arg) {
    if (multiMode && !Array.isArray(arg) || !multiMode && Array.isArray(arg)) {
      throw new Error("To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')");
    }
    if (Array.isArray(arg) && arg.length > 8) {
      throw new Error('The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation');
    }

    return Array.isArray(arg) ? arg.join(' ') : arg;
  }).join(', ');

  return {
    animation: code
  };
}

//      

/**
 * Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */

function backgroundImages() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    backgroundImage: properties.join(', ')
  };
}

//      

/**
 * Shorthand that accepts any number of background values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
 * }
 */
function backgrounds() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    background: properties.join(', ')
  };
}

//      
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderRightColor': 'green',
 *   'borderBottomColor': 'blue',
 *   'borderLeftColor': 'yellow'
 * }
 */

function borderColor() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['borderColor'].concat(values));
}

//      
/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */

function borderRadius(side, radius) {
  var uppercaseSide = capitalizeString(side);
  if (!radius && radius !== 0) {
    throw new Error('borderRadius expects a radius value as a string or number as the second argument.');
  }
  if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
    var _ref;

    return _ref = {}, _ref['border' + uppercaseSide + 'RightRadius'] = radius, _ref['border' + uppercaseSide + 'LeftRadius'] = radius, _ref;
  }

  if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
    var _ref2;

    return _ref2 = {}, _ref2['borderTop' + uppercaseSide + 'Radius'] = radius, _ref2['borderBottom' + uppercaseSide + 'Radius'] = radius, _ref2;
  }

  throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.');
}

//      
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */

function borderStyle() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['borderStyle'].concat(values));
}

//      
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopWidth': '12px',
 *   'borderRightWidth': '24px',
 *   'borderBottomWidth': '36px',
 *   'borderLeftWidth': '48px'
 * }
 */
function borderWidth() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['borderWidth'].concat(values));
}

//      


function generateSelectors(template, state) {
  var stateSuffix = state ? ':' + state : '';
  return template(stateSuffix);
}

/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */
function statefulSelectors(states, template, stateMap) {
  if (!template) throw new Error('You must provide a template to this method.');
  if (states.length === 0) return generateSelectors(template, null);
  var selectors = [];
  for (var i = 0; i < states.length; i += 1) {
    if (stateMap && stateMap.indexOf(states[i]) < 0) {
      throw new Error('You passed an unsupported selector state to this method.');
    }
    selectors.push(generateSelectors(template, states[i]));
  }
  selectors = selectors.join(',');
  return selectors;
}

//      
var stateMap = [undefined, null, 'active', 'focus', 'hover'];

function template(state) {
  return 'button' + state + ',\n  input[type="button"]' + state + ',\n  input[type="reset"]' + state + ',\n  input[type="submit"]' + state;
}

/**
 * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [buttons('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${buttons('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'button:active,
 *  'input[type="button"]:active,
 *  'input[type=\"reset\"]:active,
 *  'input[type=\"submit\"]:active: {
 *   'border': 'none'
 * }
 */

function buttons() {
  for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template, stateMap);
}

//      
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'marginTop': '12px',
 *   'marginRight': '24px',
 *   'marginBottom': '36px',
 *   'marginLeft': '48px'
 * }
 */

function margin() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['margin'].concat(values));
}

//      
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */

function padding() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['padding'].concat(values));
}

//      
var positionMap$1 = ['absolute', 'fixed', 'relative', 'static', 'sticky'];

/**
 * Shorthand accepts up to five values, including null to skip a value, and maps them to their respective directions. The first value can optionally be a position keyword.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...position('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...position('absolute', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('absolute', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'position': 'absolute',
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 */

function position(positionKeyword) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (positionMap$1.indexOf(positionKeyword) >= 0) {
    return _extends({
      position: positionKeyword
    }, directionalProperty.apply(undefined, [''].concat(values)));
  } else {
    var firstValue = positionKeyword; // in this case position is actually the first value
    return directionalProperty.apply(undefined, ['', firstValue].concat(values));
  }
}

//      

/**
 * Shorthand to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */

function size(height) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : height;

  return {
    height: height,
    width: width
  };
}

//      
var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

function template$1(state) {
  return 'input[type="color"]' + state + ',\n    input[type="date"]' + state + ',\n    input[type="datetime"]' + state + ',\n    input[type="datetime-local"]' + state + ',\n    input[type="email"]' + state + ',\n    input[type="month"]' + state + ',\n    input[type="number"]' + state + ',\n    input[type="password"]' + state + ',\n    input[type="search"]' + state + ',\n    input[type="tel"]' + state + ',\n    input[type="text"]' + state + ',\n    input[type="time"]' + state + ',\n    input[type="url"]' + state + ',\n    input[type="week"]' + state + ',\n    input:not([type])' + state + ',\n    textarea' + state;
}

/**
 * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [textInputs('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${textInputs('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'input[type="color"]:active,
 *  input[type="date"]:active,
 *  input[type="datetime"]:active,
 *  input[type="datetime-local"]:active,
 *  input[type="email"]:active,
 *  input[type="month"]:active,
 *  input[type="number"]:active,
 *  input[type="password"]:active,
 *  input[type="search"]:active,
 *  input[type="tel"]:active,
 *  input[type="text"]:active,
 *  input[type="time"]:active,
 *  input[type="url"]:active,
 *  input[type="week"]:active,
 *  input:not([type]):active,
 *  textarea:active': {
 *   'border': 'none'
 * }
 */

function textInputs() {
  for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template$1, stateMap$1);
}

//      

/**
 * Shorthand that accepts any number of transition values as parameters for creating a single transition statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 * }
 */

function transitions() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    transition: properties.join(', ')
  };
}

//      
// Helpers
// Mixins
// Color
// Shorthands




/***/ }),

/***/ "./node_modules/react-day-picker/DayPickerInput.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  Used to import DayPickerInput. e.g. `import DayPickerInput from 'react-day-picker/DayPickerInput'`
*/

/* eslint-disable no-var */
/* eslint-env node */

var DayPickerInput = __webpack_require__("./node_modules/react-day-picker/lib/src/DayPickerInput.js");

module.exports = DayPickerInput;


/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/Caption.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LocaleUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/LocaleUtils.js");

var _LocaleUtils2 = _interopRequireDefault(_LocaleUtils);

var _keys = __webpack_require__("./node_modules/react-day-picker/lib/src/keys.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Caption = function (_Component) {
  _inherits(Caption, _Component);

  function Caption(props) {
    _classCallCheck(this, Caption);

    var _this = _possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).call(this, props));

    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    return _this;
  }

  _createClass(Caption, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.locale !== this.props.locale || nextProps.classNames !== this.props.classNames || nextProps.date.getMonth() !== this.props.date.getMonth() || nextProps.date.getFullYear() !== this.props.date.getFullYear();
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (e.keyCode === _keys.ENTER) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          date = _props.date,
          months = _props.months,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        { className: classNames.caption, role: 'heading' },
        _react2.default.createElement(
          'div',
          { onClick: onClick, onKeyUp: this.handleKeyUp },
          months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
        )
      );
    }
  }]);

  return Caption;
}(_react.Component);

Caption.defaultProps = {
  localeUtils: _LocaleUtils2.default
};
exports.default = Caption;
Caption.propTypes =  true ? {
  date: _propTypes2.default.instanceOf(Date),
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),
  locale: _propTypes2.default.string,
  localeUtils: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  classNames: _propTypes2.default.shape({
    caption: _propTypes2.default.string.isRequired
  }).isRequired
} : {};
//# sourceMappingURL=Caption.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/DateUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
exports.isDate = isDate;
exports.addMonths = addMonths;
exports.isSameDay = isSameDay;
exports.isSameMonth = isSameMonth;
exports.isDayBefore = isDayBefore;
exports.isDayAfter = isDayAfter;
exports.isPastDay = isPastDay;
exports.isFutureDay = isFutureDay;
exports.isDayBetween = isDayBetween;
exports.addDayToRange = addDayToRange;
exports.isDayInRange = isDayInRange;
exports.getWeekNumber = getWeekNumber;
/**
 * Clone a date object.
 *
 * @export
 * @param  {Date} d The date to clone
 * @return {Date} The cloned date
 */
function clone(d) {
  return new Date(d.getTime());
}

/**
 * Return `true` if the passed value is a valid JavaScript Date object.
 *
 * @export
 * @param {any} value
 * @returns {Boolean}
 */
function isDate(value) {
  return value instanceof Date && !isNaN(value.valueOf());
}

/**
 * Return `d` as a new date with `n` months added.
 *
 * @export
 * @param {[type]} d
 * @param {[type]} n
 */
function addMonths(d, n) {
  var newDate = clone(d);
  newDate.setMonth(d.getMonth() + n);
  return newDate;
}

/**
 * Return `true` if two dates are the same day, ignoring the time.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameDay(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Return `true` if two dates fall in the same month.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameMonth(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Returns `true` if the first day is before the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayBefore(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 < day2;
}

/**
 * Returns `true` if the first day is after the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayAfter(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 > day2;
}

/**
 * Return `true` if a day is in the past, e.g. yesterday or any day
 * before yesterday.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isPastDay(d) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return isDayBefore(d, today);
}

/**
 * Return `true` if a day is in the future, e.g. tomorrow or any day
 * after tomorrow.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isFutureDay(d) {
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow.setHours(0, 0, 0, 0);
  return d >= tomorrow;
}

/**
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
 *
 * @export
 * @param  {Date}  d
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isDayBetween(d, d1, d2) {
  var date = clone(d);
  date.setHours(0, 0, 0, 0);
  return isDayAfter(date, d1) && isDayBefore(date, d2) || isDayAfter(date, d2) && isDayBefore(date, d1);
}

/**
 * Add a day to a range and return a new range. A range is an object with
 * `from` and `to` days.
 *
 * @export
 * @param {Date} day
 * @param {Object} range
 * @return {Object} Returns a new range object
 */
function addDayToRange(day) {
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { from: null, to: null };
  var from = range.from,
      to = range.to;

  if (!from) {
    from = day;
  } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null;
    to = null;
  } else if (to && isDayBefore(day, from)) {
    from = day;
  } else if (to && isSameDay(day, to)) {
    from = day;
    to = day;
  } else {
    to = day;
    if (isDayBefore(to, from)) {
      to = from;
      from = day;
    }
  }

  return { from: from, to: to };
}

/**
 * Return `true` if a day is included in a range of days.
 *
 * @export
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
function isDayInRange(day, range) {
  var from = range.from,
      to = range.to;

  return from && isSameDay(day, from) || to && isSameDay(day, to) || from && to && isDayBetween(day, from, to);
}

/**
 * Return the year's week number (as per ISO, i.e. with the week starting from monday)
 * for the given day.
 *
 * @export
 * @param {Date} day
 * @returns {Number}
 */
function getWeekNumber(day) {
  var date = clone(day);
  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  return Math.ceil(((date - new Date(date.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
}

exports.default = {
  addDayToRange: addDayToRange,
  addMonths: addMonths,
  clone: clone,
  getWeekNumber: getWeekNumber,
  isDate: isDate,
  isDayAfter: isDayAfter,
  isDayBefore: isDayBefore,
  isDayBetween: isDayBetween,
  isDayInRange: isDayInRange,
  isFutureDay: isFutureDay,
  isPastDay: isPastDay,
  isSameDay: isSameDay,
  isSameMonth: isSameMonth
};
//# sourceMappingURL=DateUtils.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/Day.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DateUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/DateUtils.js");

var _Helpers = __webpack_require__("./node_modules/react-day-picker/lib/src/Helpers.js");

var _classNames = __webpack_require__("./node_modules/react-day-picker/lib/src/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return function (e) {
    e.persist();
    handler(day, modifiers, e);
  };
}

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var propNames = Object.keys(this.props);
      var nextPropNames = Object.keys(nextProps);
      if (propNames.length !== nextPropNames.length) {
        return true;
      }
      return propNames.some(function (name) {
        if (name === 'modifiers' || name === 'modifiersStyles' || name === 'classNames') {
          var prop = _this2.props[name];
          var nextProp = nextProps[name];
          var modifiers = Object.keys(prop);
          var nextModifiers = Object.keys(nextProp);
          if (modifiers.length !== nextModifiers.length) {
            return true;
          }
          return modifiers.some(function (mod) {
            return !(0, _Helpers.hasOwnProp)(nextProp, mod) || prop[mod] !== nextProp[mod];
          });
        }
        if (name === 'day') {
          return !(0, _DateUtils.isSameDay)(_this2.props[name], nextProps[name]);
        }
        return !(0, _Helpers.hasOwnProp)(nextProps, name) || _this2.props[name] !== nextProps[name];
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          modifiersStyles = _props.modifiersStyles,
          day = _props.day,
          tabIndex = _props.tabIndex,
          empty = _props.empty,
          modifiers = _props.modifiers,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onClick = _props.onClick,
          onKeyDown = _props.onKeyDown,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onFocus = _props.onFocus,
          ariaLabel = _props.ariaLabel,
          ariaDisabled = _props.ariaDisabled,
          ariaSelected = _props.ariaSelected,
          children = _props.children;


      var className = classNames.day;
      if (classNames !== _classNames2.default) {
        // When using CSS modules prefix the modifier as required by the BEM syntax
        className += ' ' + Object.keys(modifiers).join(' ');
      } else {
        className += Object.keys(modifiers).map(function (modifier) {
          return ' ' + className + '--' + modifier;
        }).join('');
      }

      var style = void 0;
      if (modifiersStyles) {
        Object.keys(modifiers).filter(function (modifier) {
          return !!modifiersStyles[modifier];
        }).forEach(function (modifier) {
          style = _extends({}, style, modifiersStyles[modifier]);
        });
      }

      if (empty) {
        return _react2.default.createElement('div', { 'aria-disabled': true, className: className, style: style });
      }
      return _react2.default.createElement(
        'div',
        {
          className: className,
          tabIndex: tabIndex,
          style: style,
          role: 'gridcell',
          'aria-label': ariaLabel,
          'aria-disabled': ariaDisabled,
          'aria-selected': ariaSelected,
          onClick: handleEvent(onClick, day, modifiers),
          onKeyDown: handleEvent(onKeyDown, day, modifiers),
          onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
          onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
          onMouseUp: handleEvent(onMouseUp, day, modifiers),
          onMouseDown: handleEvent(onMouseDown, day, modifiers),
          onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
          onTouchStart: handleEvent(onTouchStart, day, modifiers),
          onFocus: handleEvent(onFocus, day, modifiers)
        },
        children
      );
    }
  }]);

  return Day;
}(_react.Component);

Day.defaultProps = {
  tabIndex: -1
};
Day.defaultProps = {
  modifiers: {},
  modifiersStyles: {},
  empty: false
};
exports.default = Day;
Day.propTypes =  true ? {
  classNames: _propTypes2.default.shape({
    day: _propTypes2.default.string.isRequired
  }).isRequired,

  day: _propTypes2.default.instanceOf(Date).isRequired,
  children: _propTypes2.default.node.isRequired,

  ariaDisabled: _propTypes2.default.bool,
  ariaLabel: _propTypes2.default.string,
  ariaSelected: _propTypes2.default.bool,
  empty: _propTypes2.default.bool,
  modifiers: _propTypes2.default.object,
  modifiersStyles: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  tabIndex: _propTypes2.default.number
} : {};
//# sourceMappingURL=Day.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/DayPicker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModifiersUtils = exports.LocaleUtils = exports.DateUtils = exports.DayPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Caption = __webpack_require__("./node_modules/react-day-picker/lib/src/Caption.js");

var _Caption2 = _interopRequireDefault(_Caption);

var _Navbar = __webpack_require__("./node_modules/react-day-picker/lib/src/Navbar.js");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Month = __webpack_require__("./node_modules/react-day-picker/lib/src/Month.js");

var _Month2 = _interopRequireDefault(_Month);

var _Weekday = __webpack_require__("./node_modules/react-day-picker/lib/src/Weekday.js");

var _Weekday2 = _interopRequireDefault(_Weekday);

var _Helpers = __webpack_require__("./node_modules/react-day-picker/lib/src/Helpers.js");

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/DateUtils.js");

var DateUtils = _interopRequireWildcard(_DateUtils);

var _LocaleUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/LocaleUtils.js");

var LocaleUtils = _interopRequireWildcard(_LocaleUtils);

var _ModifiersUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/ModifiersUtils.js");

var ModifiersUtils = _interopRequireWildcard(_ModifiersUtils);

var _classNames = __webpack_require__("./node_modules/react-day-picker/lib/src/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

var _keys = __webpack_require__("./node_modules/react-day-picker/lib/src/keys.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPicker = exports.DayPicker = function (_Component) {
  _inherits(DayPicker, _Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

    _this.dayPicker = null;

    _this.showNextMonth = function (callback) {
      if (!_this.allowNextMonth()) {
        return;
      }
      var deltaMonths = _this.props.pagedNavigation ? _this.props.numberOfMonths : 1;
      var nextMonth = DateUtils.addMonths(_this.state.currentMonth, deltaMonths);
      _this.showMonth(nextMonth, callback);
    };

    _this.showPreviousMonth = function (callback) {
      if (!_this.allowPreviousMonth()) {
        return;
      }
      var deltaMonths = _this.props.pagedNavigation ? _this.props.numberOfMonths : 1;
      var previousMonth = DateUtils.addMonths(_this.state.currentMonth, -deltaMonths);
      _this.showMonth(previousMonth, callback);
    };

    _this.handleKeyDown = function (e) {
      e.persist();

      switch (e.keyCode) {
        case _keys.LEFT:
          if (_this.props.dir === 'rtl') {
            _this.showNextMonth();
          } else {
            _this.showPreviousMonth();
          }
          Helpers.cancelEvent(e);
          break;
        case _keys.RIGHT:
          if (_this.props.dir === 'rtl') {
            _this.showPreviousMonth();
          } else {
            _this.showNextMonth();
          }
          Helpers.cancelEvent(e);
          break;
        case _keys.UP:
          _this.showPreviousYear();
          Helpers.cancelEvent(e);
          break;
        case _keys.DOWN:
          _this.showNextYear();
          Helpers.cancelEvent(e);
          break;
        default:
          break;
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }
    };

    _this.handleDayKeyDown = function (day, modifiers, e) {
      e.persist();

      switch (e.keyCode) {
        case _keys.LEFT:
          Helpers.cancelEvent(e);
          if (_this.props.dir === 'rtl') {
            _this.focusNextDay(e.target);
          } else {
            _this.focusPreviousDay(e.target);
          }
          break;
        case _keys.RIGHT:
          Helpers.cancelEvent(e);
          if (_this.props.dir === 'rtl') {
            _this.focusPreviousDay(e.target);
          } else {
            _this.focusNextDay(e.target);
          }
          break;
        case _keys.UP:
          Helpers.cancelEvent(e);
          _this.focusPreviousWeek(e.target);
          break;
        case _keys.DOWN:
          Helpers.cancelEvent(e);
          _this.focusNextWeek(e.target);
          break;
        case _keys.ENTER:
        case _keys.SPACE:
          Helpers.cancelEvent(e);
          if (_this.props.onDayClick) {
            _this.handleDayClick(day, modifiers, e);
          }
          break;
        default:
          break;
      }
      if (_this.props.onDayKeyDown) {
        _this.props.onDayKeyDown(day, modifiers, e);
      }
    };

    _this.handleDayClick = function (day, modifiers, e) {
      e.persist();

      if (modifiers[_this.props.classNames.outside] && _this.props.enableOutsideDaysClick) {
        _this.handleOutsideDayClick(day);
      }
      if (_this.props.onDayClick) {
        _this.props.onDayClick(day, modifiers, e);
      }
    };

    _this.handleTodayButtonClick = function (e) {
      var today = new Date();
      var month = new Date(today.getFullYear(), today.getMonth());
      _this.showMonth(month);
      e.target.blur();
      if (_this.props.onTodayButtonClick) {
        e.persist();
        _this.props.onTodayButtonClick(new Date(today.getFullYear(), today.getMonth(), today.getDate()), ModifiersUtils.getModifiersForDay(today, _this.props.modifiers), e);
      }
    };

    var currentMonth = _this.getCurrentMonthFromProps(props);
    _this.state = { currentMonth: currentMonth };
    return _this;
  }

  _createClass(DayPicker, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // Changing the `month` props means changing the current displayed month
      if (prevProps.month !== this.props.month && !DateUtils.isSameMonth(prevProps.month, this.props.month)) {
        var currentMonth = this.getCurrentMonthFromProps(this.props);
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ currentMonth: currentMonth });
      }
    }

    /**
     * Return the month to be shown in the calendar based on the component props.
     *
     * @param {Object} props
     * @returns Date
     * @memberof DayPicker
     * @private
     */

  }, {
    key: 'getCurrentMonthFromProps',
    value: function getCurrentMonthFromProps(props) {
      var initialMonth = Helpers.startOfMonth(props.month || props.initialMonth);
      var currentMonth = initialMonth;

      if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
        var fromMonth = Helpers.startOfMonth(props.fromMonth);
        var diffInMonths = Helpers.getMonthsDiff(fromMonth, currentMonth);
        currentMonth = DateUtils.addMonths(fromMonth, Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths);
      } else if (props.toMonth && props.numberOfMonths > 1 && Helpers.getMonthsDiff(currentMonth, props.toMonth) <= 0) {
        currentMonth = DateUtils.addMonths(Helpers.startOfMonth(props.toMonth), 1 - this.props.numberOfMonths);
      }
      return currentMonth;
    }
  }, {
    key: 'getNextNavigableMonth',
    value: function getNextNavigableMonth() {
      return DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
    }
  }, {
    key: 'getPreviousNavigableMonth',
    value: function getPreviousNavigableMonth() {
      return DateUtils.addMonths(this.state.currentMonth, -1);
    }
  }, {
    key: 'allowPreviousMonth',
    value: function allowPreviousMonth() {
      var previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
      return this.allowMonth(previousMonth);
    }
  }, {
    key: 'allowNextMonth',
    value: function allowNextMonth() {
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
      return this.allowMonth(nextMonth);
    }
  }, {
    key: 'allowMonth',
    value: function allowMonth(d) {
      var _props = this.props,
          fromMonth = _props.fromMonth,
          toMonth = _props.toMonth,
          canChangeMonth = _props.canChangeMonth;

      if (!canChangeMonth || fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0 || toMonth && Helpers.getMonthsDiff(toMonth, d) > 0) {
        return false;
      }
      return true;
    }
  }, {
    key: 'allowYearChange',
    value: function allowYearChange() {
      return this.props.canChangeMonth;
    }
  }, {
    key: 'showMonth',
    value: function showMonth(d, callback) {
      var _this2 = this;

      if (!this.allowMonth(d)) {
        return;
      }
      this.setState({ currentMonth: Helpers.startOfMonth(d) }, function () {
        if (callback) {
          callback();
        }
        if (_this2.props.onMonthChange) {
          _this2.props.onMonthChange(_this2.state.currentMonth);
        }
      });
    }
  }, {
    key: 'showNextYear',
    value: function showNextYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, 12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'showPreviousYear',
    value: function showPreviousYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, -12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'focusFirstDayOfMonth',
    value: function focusFirstDayOfMonth() {
      Helpers.getDayNodes(this.dayPicker, this.props.classNames)[0].focus();
    }
  }, {
    key: 'focusLastDayOfMonth',
    value: function focusLastDayOfMonth() {
      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      dayNodes[dayNodes.length - 1].focus();
    }
  }, {
    key: 'focusPreviousDay',
    value: function focusPreviousDay(dayNode) {
      var _this3 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      if (dayNodeIndex === -1) return;
      if (dayNodeIndex === 0) {
        this.showPreviousMonth(function () {
          return _this3.focusLastDayOfMonth();
        });
      } else {
        dayNodes[dayNodeIndex - 1].focus();
      }
    }
  }, {
    key: 'focusNextDay',
    value: function focusNextDay(dayNode) {
      var _this4 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      if (dayNodeIndex === -1) return;
      if (dayNodeIndex === dayNodes.length - 1) {
        this.showNextMonth(function () {
          return _this4.focusFirstDayOfMonth();
        });
      } else {
        dayNodes[dayNodeIndex + 1].focus();
      }
    }
  }, {
    key: 'focusNextWeek',
    value: function focusNextWeek(dayNode) {
      var _this5 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      var isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

      if (isInLastWeekOfMonth) {
        this.showNextMonth(function () {
          var daysAfterIndex = dayNodes.length - dayNodeIndex;
          var nextMonthDayNodeIndex = 7 - daysAfterIndex;
          Helpers.getDayNodes(_this5.dayPicker, _this5.props.classNames)[nextMonthDayNodeIndex].focus();
        });
      } else {
        dayNodes[dayNodeIndex + 7].focus();
      }
    }
  }, {
    key: 'focusPreviousWeek',
    value: function focusPreviousWeek(dayNode) {
      var _this6 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      var isInFirstWeekOfMonth = dayNodeIndex <= 6;

      if (isInFirstWeekOfMonth) {
        this.showPreviousMonth(function () {
          var previousMonthDayNodes = Helpers.getDayNodes(_this6.dayPicker, _this6.props.classNames);
          var startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
          var previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
          previousMonthDayNodes[previousMonthDayNodeIndex].focus();
        });
      } else {
        dayNodes[dayNodeIndex - 7].focus();
      }
    }

    // Event handlers

  }, {
    key: 'handleOutsideDayClick',
    value: function handleOutsideDayClick(day) {
      var currentMonth = this.state.currentMonth;
      var numberOfMonths = this.props.numberOfMonths;

      var diffInMonths = Helpers.getMonthsDiff(currentMonth, day);
      if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
        this.showNextMonth();
      } else if (diffInMonths < 0) {
        this.showPreviousMonth();
      }
    }
  }, {
    key: 'renderNavbar',
    value: function renderNavbar() {
      var _props2 = this.props,
          labels = _props2.labels,
          locale = _props2.locale,
          localeUtils = _props2.localeUtils,
          canChangeMonth = _props2.canChangeMonth,
          navbarElement = _props2.navbarElement,
          attributes = _objectWithoutProperties(_props2, ['labels', 'locale', 'localeUtils', 'canChangeMonth', 'navbarElement']);

      if (!canChangeMonth) return null;

      var props = {
        month: this.state.currentMonth,
        classNames: this.props.classNames,
        className: this.props.classNames.navBar,
        nextMonth: this.getNextNavigableMonth(),
        previousMonth: this.getPreviousNavigableMonth(),
        showPreviousButton: this.allowPreviousMonth(),
        showNextButton: this.allowNextMonth(),
        onNextClick: this.showNextMonth,
        onPreviousClick: this.showPreviousMonth,
        dir: attributes.dir,
        labels: labels,
        locale: locale,
        localeUtils: localeUtils
      };
      return _react2.default.isValidElement(navbarElement) ? _react2.default.cloneElement(navbarElement, props) : _react2.default.createElement(navbarElement, props);
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths() {
      var months = [];
      var firstDayOfWeek = Helpers.getFirstDayOfWeekFromProps(this.props);
      for (var i = 0; i < this.props.numberOfMonths; i += 1) {
        var month = DateUtils.addMonths(this.state.currentMonth, i);
        months.push(_react2.default.createElement(_Month2.default, _extends({
          key: i
        }, this.props, {
          month: month,
          firstDayOfWeek: firstDayOfWeek,
          onDayKeyDown: this.handleDayKeyDown,
          onDayClick: this.handleDayClick
        })));
      }

      if (this.props.reverseMonths) {
        months.reverse();
      }
      return months;
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      if (this.props.todayButton) {
        return _react2.default.createElement(
          'div',
          { className: this.props.classNames.footer },
          this.renderTodayButton()
        );
      }
      return null;
    }
  }, {
    key: 'renderTodayButton',
    value: function renderTodayButton() {
      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          tabIndex: 0,
          className: this.props.classNames.todayButton,
          'aria-label': this.props.todayButton,
          onClick: this.handleTodayButtonClick
        },
        this.props.todayButton
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var className = this.props.classNames.container;

      if (!this.props.onDayClick) {
        className = className + ' ' + this.props.classNames.interactionDisabled;
      }
      if (this.props.className) {
        className = className + ' ' + this.props.className;
      }
      return _react2.default.createElement(
        'div',
        _extends({}, this.props.containerProps, {
          className: className,
          ref: function ref(el) {
            return _this7.dayPicker = el;
          },
          lang: this.props.locale
        }),
        _react2.default.createElement(
          'div',
          {
            className: this.props.classNames.wrapper,
            tabIndex: this.props.canChangeMonth && typeof this.props.tabIndex !== 'undefined' ? this.props.tabIndex : -1,
            onKeyDown: this.handleKeyDown,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur
          },
          this.renderNavbar(),
          _react2.default.createElement(
            'div',
            { className: this.props.classNames.months },
            this.renderMonths()
          ),
          this.renderFooter()
        )
      );
    }
  }]);

  return DayPicker;
}(_react.Component);

DayPicker.VERSION = '7.3.0';
DayPicker.defaultProps = {
  classNames: _classNames2.default,
  tabIndex: 0,
  initialMonth: new Date(),
  numberOfMonths: 1,
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  locale: 'en',
  localeUtils: LocaleUtils,
  showOutsideDays: false,
  enableOutsideDaysClick: true,
  fixedWeeks: false,
  canChangeMonth: true,
  reverseMonths: false,
  pagedNavigation: false,
  showWeekNumbers: false,
  showWeekDays: true,
  renderDay: function renderDay(day) {
    return day.getDate();
  },
  renderWeek: function renderWeek(weekNumber) {
    return weekNumber;
  },
  weekdayElement: _react2.default.createElement(_Weekday2.default, null),
  navbarElement: _react2.default.createElement(_Navbar2.default, { classNames: _classNames2.default }),
  captionElement: _react2.default.createElement(_Caption2.default, { classNames: _classNames2.default })
};
DayPicker.propTypes =  true ? {
  // Rendering months
  initialMonth: _propTypes2.default.instanceOf(Date),
  month: _propTypes2.default.instanceOf(Date),
  numberOfMonths: _propTypes2.default.number,
  fromMonth: _propTypes2.default.instanceOf(Date),
  toMonth: _propTypes2.default.instanceOf(Date),
  canChangeMonth: _propTypes2.default.bool,
  reverseMonths: _propTypes2.default.bool,
  pagedNavigation: _propTypes2.default.bool,
  todayButton: _propTypes2.default.string,
  showWeekNumbers: _propTypes2.default.bool,
  showWeekDays: _propTypes2.default.bool,

  // Modifiers
  selectedDays: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.array]),
  disabledDays: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.array]),

  modifiers: _propTypes2.default.object,
  modifiersStyles: _propTypes2.default.object,

  // Localization
  dir: _propTypes2.default.string,
  firstDayOfWeek: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5, 6]),
  labels: _propTypes2.default.shape({
    nextMonth: _propTypes2.default.string.isRequired,
    previousMonth: _propTypes2.default.string.isRequired
  }),
  locale: _propTypes2.default.string,
  localeUtils: _propTypes2.default.shape({
    formatMonthTitle: _propTypes2.default.func,
    formatWeekdayShort: _propTypes2.default.func,
    formatWeekdayLong: _propTypes2.default.func,
    getFirstDayOfWeek: _propTypes2.default.func
  }),
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string),

  // Customization
  showOutsideDays: _propTypes2.default.bool,
  enableOutsideDaysClick: _propTypes2.default.bool,
  fixedWeeks: _propTypes2.default.bool,

  // CSS and HTML
  classNames: _propTypes2.default.shape({
    body: _propTypes2.default.string,
    container: _propTypes2.default.string,
    day: _propTypes2.default.string.isRequired,
    disabled: _propTypes2.default.string.isRequired,
    footer: _propTypes2.default.string,
    interactionDisabled: _propTypes2.default.string,
    months: _propTypes2.default.string,
    month: _propTypes2.default.string,
    navBar: _propTypes2.default.string,
    outside: _propTypes2.default.string.isRequired,
    selected: _propTypes2.default.string.isRequired,
    today: _propTypes2.default.string.isRequired,
    todayButton: _propTypes2.default.string,
    week: _propTypes2.default.string,
    wrapper: _propTypes2.default.string
  }),
  className: _propTypes2.default.string,
  containerProps: _propTypes2.default.object,
  tabIndex: _propTypes2.default.number,

  // Custom elements
  renderDay: _propTypes2.default.func,
  renderWeek: _propTypes2.default.func,
  weekdayElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react.Component)]),
  navbarElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react.Component)]),
  captionElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react.Component)]),

  // Events
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onDayClick: _propTypes2.default.func,
  onDayKeyDown: _propTypes2.default.func,
  onDayMouseEnter: _propTypes2.default.func,
  onDayMouseLeave: _propTypes2.default.func,
  onDayMouseDown: _propTypes2.default.func,
  onDayMouseUp: _propTypes2.default.func,
  onDayTouchStart: _propTypes2.default.func,
  onDayTouchEnd: _propTypes2.default.func,
  onDayFocus: _propTypes2.default.func,
  onMonthChange: _propTypes2.default.func,
  onCaptionClick: _propTypes2.default.func,
  onWeekClick: _propTypes2.default.func,
  onTodayButtonClick: _propTypes2.default.func
} : {};


DayPicker.DateUtils = DateUtils;
DayPicker.LocaleUtils = LocaleUtils;
DayPicker.ModifiersUtils = ModifiersUtils;

exports.DateUtils = DateUtils;
exports.LocaleUtils = LocaleUtils;
exports.ModifiersUtils = ModifiersUtils;
exports.default = DayPicker;
//# sourceMappingURL=DayPicker.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/DayPickerInput.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_TIMEOUT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.OverlayComponent = OverlayComponent;
exports.defaultFormat = defaultFormat;
exports.defaultParse = defaultParse;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DayPicker = __webpack_require__("./node_modules/react-day-picker/lib/src/DayPicker.js");

var _DayPicker2 = _interopRequireDefault(_DayPicker);

var _DateUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/DateUtils.js");

var _ModifiersUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/ModifiersUtils.js");

var _keys = __webpack_require__("./node_modules/react-day-picker/lib/src/keys.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// When clicking on a day cell, overlay will be hidden after this timeout
var HIDE_TIMEOUT = exports.HIDE_TIMEOUT = 100;

/**
 * The default component used as Overlay.
 *
 * @param {Object} props
 */
function OverlayComponent(_ref) {
  var input = _ref.input,
      selectedDay = _ref.selectedDay,
      month = _ref.month,
      children = _ref.children,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['input', 'selectedDay', 'month', 'children', 'classNames']);

  return _react2.default.createElement(
    'div',
    _extends({ className: classNames.overlayWrapper }, props),
    _react2.default.createElement(
      'div',
      { className: classNames.overlay },
      children
    )
  );
}

OverlayComponent.propTypes =  true ? {
  input: _propTypes2.default.any,
  selectedDay: _propTypes2.default.any,
  month: _propTypes2.default.instanceOf(Date),
  children: _propTypes2.default.node,
  classNames: _propTypes2.default.object
} : {};

/**
 * The default function used to format a Date to String, passed to the `format`
 * prop.
 * @param {Date} d
 * @return {String}
 */
function defaultFormat(d) {
  if ((0, _DateUtils.isDate)(d)) {
    var year = d.getFullYear();
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    return year + '-' + month + '-' + day;
  }
  return '';
}

/**
 * The default function used to parse a String as Date, passed to the `parse`
 * prop.
 * @param {String} str
 * @return {Date}
 */
function defaultParse(str) {
  if (typeof str !== 'string') {
    return undefined;
  }
  var split = str.split('-');
  if (split.length !== 3) {
    return undefined;
  }
  var year = parseInt(split[0], 10);
  var month = parseInt(split[1], 10) - 1;
  var day = parseInt(split[2], 10);
  if (isNaN(year) || String(year).length > 4 || isNaN(month) || isNaN(day) || day <= 0 || day > 31 || month < 0 || month >= 12) {
    return undefined;
  }

  return new Date(year, month, day);
}

var DayPickerInput = function (_React$Component) {
  _inherits(DayPickerInput, _React$Component);

  function DayPickerInput(props) {
    _classCallCheck(this, DayPickerInput);

    var _this = _possibleConstructorReturn(this, (DayPickerInput.__proto__ || Object.getPrototypeOf(DayPickerInput)).call(this, props));

    _this.input = null;
    _this.daypicker = null;
    _this.clickTimeout = null;
    _this.hideTimeout = null;
    _this.inputBlurTimeout = null;
    _this.inputFocusTimeout = null;


    _this.state = _this.getInitialStateFromProps(props);
    _this.state.showOverlay = props.showOverlay;

    _this.hideAfterDayClick = _this.hideAfterDayClick.bind(_this);
    _this.handleInputClick = _this.handleInputClick.bind(_this);
    _this.handleInputFocus = _this.handleInputFocus.bind(_this);
    _this.handleInputBlur = _this.handleInputBlur.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleInputKeyDown = _this.handleInputKeyDown.bind(_this);
    _this.handleInputKeyUp = _this.handleInputKeyUp.bind(_this);
    _this.handleDayClick = _this.handleDayClick.bind(_this);
    _this.handleMonthChange = _this.handleMonthChange.bind(_this);
    _this.handleOverlayFocus = _this.handleOverlayFocus.bind(_this);
    _this.handleOverlayBlur = _this.handleOverlayBlur.bind(_this);
    return _this;
  }

  _createClass(DayPickerInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var newState = {};

      // Current props
      var _props = this.props,
          value = _props.value,
          formatDate = _props.formatDate,
          format = _props.format,
          dayPickerProps = _props.dayPickerProps;

      // Update the input value if the `value` prop has changed

      if (value !== prevProps.value) {
        if ((0, _DateUtils.isDate)(value)) {
          newState.value = formatDate(value, format, dayPickerProps.locale);
        } else {
          newState.value = value;
        }
      }

      // Update the month if the months from props changed
      var prevMonth = prevProps.dayPickerProps.month;
      if (dayPickerProps.month && dayPickerProps.month !== prevMonth && !(0, _DateUtils.isSameMonth)(dayPickerProps.month, prevMonth)) {
        newState.month = dayPickerProps.month;
      }

      // Updated the selected days from props if they changed
      if (prevProps.dayPickerProps.selectedDays !== dayPickerProps.selectedDays) {
        newState.selectedDays = dayPickerProps.selectedDays;
      }

      if (Object.keys(newState).length > 0) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState(newState);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.clickTimeout);
      clearTimeout(this.hideTimeout);
      clearTimeout(this.inputFocusTimeout);
      clearTimeout(this.inputBlurTimeout);
      clearTimeout(this.overlayBlurTimeout);
    }
  }, {
    key: 'getInitialMonthFromProps',
    value: function getInitialMonthFromProps(props) {
      var dayPickerProps = props.dayPickerProps,
          format = props.format;

      var day = void 0;
      if (props.value) {
        if ((0, _DateUtils.isDate)(props.value)) {
          day = props.value;
        } else {
          day = props.parseDate(props.value, format, dayPickerProps.locale);
        }
      }
      return dayPickerProps.initialMonth || dayPickerProps.month || day || new Date();
    }
  }, {
    key: 'getInitialStateFromProps',
    value: function getInitialStateFromProps(props) {
      var dayPickerProps = props.dayPickerProps,
          formatDate = props.formatDate,
          format = props.format;
      var value = props.value;

      if (props.value && (0, _DateUtils.isDate)(props.value)) {
        value = formatDate(props.value, format, dayPickerProps.locale);
      }
      return {
        value: value,
        month: this.getInitialMonthFromProps(props),
        selectedDays: dayPickerProps.selectedDays
      };
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      return this.input;
    }
  }, {
    key: 'getDayPicker',
    value: function getDayPicker() {
      return this.daypicker;
    }

    /**
     * Update the component's state and fire the `onDayChange` event passing the
     * day's modifiers to it.
     *
     * @param {Date} day - Will be used for changing the month
     * @param {String} value - Input field value
     * @private
     */

  }, {
    key: 'updateState',
    value: function updateState(day, value, callback) {
      var _this2 = this;

      var _props2 = this.props,
          dayPickerProps = _props2.dayPickerProps,
          onDayChange = _props2.onDayChange;

      this.setState({ month: day, value: value, typedValue: undefined }, function () {
        if (callback) {
          callback();
        }
        if (!onDayChange) {
          return;
        }
        var modifiersObj = _extends({
          disabled: dayPickerProps.disabledDays,
          selected: dayPickerProps.selectedDays
        }, dayPickerProps.modifiers);
        var modifiers = (0, _ModifiersUtils.getModifiersForDay)(day, modifiersObj).reduce(function (obj, modifier) {
          return _extends({}, obj, _defineProperty({}, modifier, true));
        }, {});
        onDayChange(day, modifiers, _this2);
      });
    }

    /**
     * Show the Day Picker overlay.
     *
     * @memberof DayPickerInput
     */

  }, {
    key: 'showDayPicker',
    value: function showDayPicker() {
      var _this3 = this;

      var _props3 = this.props,
          parseDate = _props3.parseDate,
          format = _props3.format,
          dayPickerProps = _props3.dayPickerProps;
      var _state = this.state,
          value = _state.value,
          showOverlay = _state.showOverlay;

      if (showOverlay) {
        return;
      }
      // Reset the current displayed month when showing the overlay
      var month = value ? parseDate(value, format, dayPickerProps.locale) // Use the month in the input field
      : this.getInitialMonthFromProps(this.props); // Restore the month from the props
      this.setState(function (state) {
        return {
          showOverlay: true,
          month: month || state.month
        };
      }, function () {
        if (_this3.props.onDayPickerShow) _this3.props.onDayPickerShow();
      });
    }

    /**
     * Hide the Day Picker overlay
     *
     * @memberof DayPickerInput
     */

  }, {
    key: 'hideDayPicker',
    value: function hideDayPicker() {
      var _this4 = this;

      if (this.state.showOverlay === false) {
        return;
      }
      this.setState({ showOverlay: false }, function () {
        if (_this4.props.onDayPickerHide) _this4.props.onDayPickerHide();
      });
    }
  }, {
    key: 'hideAfterDayClick',
    value: function hideAfterDayClick() {
      var _this5 = this;

      if (!this.props.hideOnDayClick) {
        return;
      }
      this.hideTimeout = setTimeout(function () {
        return _this5.hideDayPicker();
      }, HIDE_TIMEOUT);
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick(e) {
      this.showDayPicker();
      if (this.props.inputProps.onClick) {
        e.persist();
        this.props.inputProps.onClick(e);
      }
    }
  }, {
    key: 'handleInputFocus',
    value: function handleInputFocus(e) {
      var _this6 = this;

      this.showDayPicker();
      // Set `overlayHasFocus` after a timeout so the overlay can be hidden when
      // the input is blurred
      this.inputFocusTimeout = setTimeout(function () {
        _this6.overlayHasFocus = false;
      }, 2);
      if (this.props.inputProps.onFocus) {
        e.persist();
        this.props.inputProps.onFocus(e);
      }
    }

    // When the input is blurred, the overlay should disappear. However the input
    // is blurred also when the user interacts with the overlay (e.g. the overlay
    // get the focus by clicking it). In these cases, the overlay should not be
    // hidden. There are different approaches to avoid hiding the overlay when
    // this happens, but the only cross-browser hack we’ve found is to set all
    // these timeouts in code before changing `overlayHasFocus`.

  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(e) {
      var _this7 = this;

      this.inputBlurTimeout = setTimeout(function () {
        if (!_this7.overlayHasFocus) {
          _this7.hideDayPicker();
        }
      }, 1);
      if (this.props.inputProps.onBlur) {
        e.persist();
        this.props.inputProps.onBlur(e);
      }
    }
  }, {
    key: 'handleOverlayFocus',
    value: function handleOverlayFocus(e) {
      e.preventDefault();
      this.overlayHasFocus = true;
      if (!this.props.keepFocus || !this.input || typeof this.input.focus !== 'function') {
        return;
      }
      this.input.focus();
    }
  }, {
    key: 'handleOverlayBlur',
    value: function handleOverlayBlur() {
      var _this8 = this;

      // We need to set a timeout otherwise IE11 will hide the overlay when
      // focusing it
      this.overlayBlurTimeout = setTimeout(function () {
        _this8.overlayHasFocus = false;
      }, 3);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      var _props4 = this.props,
          dayPickerProps = _props4.dayPickerProps,
          format = _props4.format,
          inputProps = _props4.inputProps,
          onDayChange = _props4.onDayChange,
          parseDate = _props4.parseDate;

      if (inputProps.onChange) {
        e.persist();
        inputProps.onChange(e);
      }
      var value = e.target.value;

      if (value.trim() === '') {
        this.setState({ value: value, typedValue: undefined });
        if (onDayChange) onDayChange(undefined, {}, this);
        return;
      }
      var day = parseDate(value, format, dayPickerProps.locale);
      if (!day) {
        // Day is invalid: we save the value in the typedValue state
        this.setState({ value: value, typedValue: value });
        if (onDayChange) onDayChange(undefined, {}, this);
        return;
      }
      this.updateState(day, value);
    }
  }, {
    key: 'handleInputKeyDown',
    value: function handleInputKeyDown(e) {
      if (e.keyCode === _keys.TAB) {
        this.hideDayPicker();
      } else {
        this.showDayPicker();
      }
      if (this.props.inputProps.onKeyDown) {
        e.persist();
        this.props.inputProps.onKeyDown(e);
      }
    }
  }, {
    key: 'handleInputKeyUp',
    value: function handleInputKeyUp(e) {
      if (e.keyCode === _keys.ESC) {
        this.hideDayPicker();
      } else {
        this.showDayPicker();
      }
      if (this.props.inputProps.onKeyUp) {
        e.persist();
        this.props.inputProps.onKeyUp(e);
      }
    }
  }, {
    key: 'handleMonthChange',
    value: function handleMonthChange(month) {
      var _this9 = this;

      this.setState({ month: month }, function () {
        if (_this9.props.dayPickerProps && _this9.props.dayPickerProps.onMonthChange) {
          _this9.props.dayPickerProps.onMonthChange(month);
        }
      });
    }
  }, {
    key: 'handleDayClick',
    value: function handleDayClick(day, modifiers, e) {
      var _this10 = this;

      var _props5 = this.props,
          clickUnselectsDay = _props5.clickUnselectsDay,
          dayPickerProps = _props5.dayPickerProps,
          onDayChange = _props5.onDayChange,
          formatDate = _props5.formatDate,
          format = _props5.format;

      if (dayPickerProps.onDayClick) {
        dayPickerProps.onDayClick(day, modifiers, e);
      }

      // Do nothing if the day is disabled
      if (modifiers.disabled || dayPickerProps && dayPickerProps.classNames && modifiers[dayPickerProps.classNames.disabled]) {
        return;
      }

      // If the clicked day is already selected, remove the clicked day
      // from the selected days and empty the field value
      if (modifiers.selected && clickUnselectsDay) {
        var selectedDays = this.state.selectedDays;

        if (Array.isArray(selectedDays)) {
          selectedDays = selectedDays.slice(0);
          var selectedDayIdx = selectedDays.indexOf(day);
          selectedDays.splice(selectedDayIdx, 1);
        } else if (selectedDays) {
          selectedDays = null;
        }
        this.setState({ value: '', typedValue: undefined, selectedDays: selectedDays }, this.hideAfterDayClick);
        if (onDayChange) {
          onDayChange(undefined, modifiers, this);
        }
        return;
      }

      var value = formatDate(day, format, dayPickerProps.locale);
      this.setState({ value: value, typedValue: undefined, month: day }, function () {
        if (onDayChange) {
          onDayChange(day, modifiers, _this10);
        }
        _this10.hideAfterDayClick();
      });
    }
  }, {
    key: 'renderOverlay',
    value: function renderOverlay() {
      var _this11 = this;

      var _props6 = this.props,
          classNames = _props6.classNames,
          dayPickerProps = _props6.dayPickerProps,
          parseDate = _props6.parseDate,
          formatDate = _props6.formatDate,
          format = _props6.format;
      var _state2 = this.state,
          selectedDays = _state2.selectedDays,
          value = _state2.value;

      var selectedDay = void 0;
      if (!selectedDays && value) {
        var day = parseDate(value, format, dayPickerProps.locale);
        if (day) {
          selectedDay = day;
        }
      } else if (selectedDays) {
        selectedDay = selectedDays;
      }
      var onTodayButtonClick = void 0;
      if (dayPickerProps.todayButton) {
        // Set the current day when clicking the today button
        onTodayButtonClick = function onTodayButtonClick() {
          return _this11.updateState(new Date(), formatDate(new Date(), format, dayPickerProps.locale), _this11.hideAfterDayClick);
        };
      }
      var Overlay = this.props.overlayComponent;
      return _react2.default.createElement(
        Overlay,
        {
          classNames: classNames,
          month: this.state.month,
          selectedDay: selectedDay,
          input: this.input,
          tabIndex: 0 // tabIndex is necessary to catch focus/blur events on Safari
          , onFocus: this.handleOverlayFocus,
          onBlur: this.handleOverlayBlur
        },
        _react2.default.createElement(_DayPicker2.default, _extends({
          ref: function ref(el) {
            return _this11.daypicker = el;
          },
          onTodayButtonClick: onTodayButtonClick
        }, dayPickerProps, {
          month: this.state.month,
          selectedDays: selectedDay,
          onDayClick: this.handleDayClick,
          onMonthChange: this.handleMonthChange
        }))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this12 = this;

      var Input = this.props.component;
      var inputProps = this.props.inputProps;

      return _react2.default.createElement(
        'div',
        { className: this.props.classNames.container, style: this.props.style },
        _react2.default.createElement(Input, _extends({
          ref: function ref(el) {
            return _this12.input = el;
          },
          placeholder: this.props.placeholder
        }, inputProps, {
          value: this.state.typedValue || this.state.value,
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur,
          onKeyDown: this.handleInputKeyDown,
          onKeyUp: this.handleInputKeyUp,
          onClick: !inputProps.disabled ? this.handleInputClick : undefined
        })),
        this.state.showOverlay && this.renderOverlay()
      );
    }
  }]);

  return DayPickerInput;
}(_react2.default.Component);

DayPickerInput.defaultProps = {
  dayPickerProps: {},
  value: '',
  placeholder: 'YYYY-M-D',
  format: 'L',
  formatDate: defaultFormat,
  parseDate: defaultParse,
  showOverlay: false,
  hideOnDayClick: true,
  clickUnselectsDay: false,
  keepFocus: true,
  component: 'input',
  inputProps: {},
  overlayComponent: OverlayComponent,
  classNames: {
    container: 'DayPickerInput',
    overlayWrapper: 'DayPickerInput-OverlayWrapper',
    overlay: 'DayPickerInput-Overlay'
  }
};
exports.default = DayPickerInput;
DayPickerInput.propTypes =  true ? {
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(Date)]),
  inputProps: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,

  format: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),

  formatDate: _propTypes2.default.func,
  parseDate: _propTypes2.default.func,

  showOverlay: _propTypes2.default.bool,
  dayPickerProps: _propTypes2.default.object,
  hideOnDayClick: _propTypes2.default.bool,
  clickUnselectsDay: _propTypes2.default.bool,
  keepFocus: _propTypes2.default.bool,
  component: _propTypes2.default.any,
  overlayComponent: _propTypes2.default.any,

  style: _propTypes2.default.object,
  classNames: _propTypes2.default.shape({
    container: _propTypes2.default.string,
    overlayWrapper: _propTypes2.default.string,
    overlay: _propTypes2.default.string.isRequired
  }),

  onDayChange: _propTypes2.default.func,
  onDayPickerHide: _propTypes2.default.func,
  onDayPickerShow: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func
} : {};
//# sourceMappingURL=DayPickerInput.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/Helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.cancelEvent = cancelEvent;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getDaysInMonth = getDaysInMonth;
exports.getModifiersFromProps = getModifiersFromProps;
exports.getFirstDayOfWeekFromProps = getFirstDayOfWeekFromProps;
exports.isRangeOfDates = isRangeOfDates;
exports.getMonthsDiff = getMonthsDiff;
exports.getWeekArray = getWeekArray;
exports.startOfMonth = startOfMonth;
exports.getDayNodes = getDayNodes;
exports.nodeListToArray = nodeListToArray;
exports.hasOwnProp = hasOwnProp;

var _DateUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/DateUtils.js");

var _LocaleUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/LocaleUtils.js");

var _classNames = __webpack_require__("./node_modules/react-day-picker/lib/src/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 12);
}

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getModifiersFromProps(props) {
  var modifiers = _extends({}, props.modifiers);
  if (props.selectedDays) {
    modifiers[props.classNames.selected] = props.selectedDays;
  }
  if (props.disabledDays) {
    modifiers[props.classNames.disabled] = props.disabledDays;
  }
  return modifiers;
}

function getFirstDayOfWeekFromProps(props) {
  var firstDayOfWeek = props.firstDayOfWeek,
      _props$locale = props.locale,
      locale = _props$locale === undefined ? 'en' : _props$locale,
      _props$localeUtils = props.localeUtils,
      localeUtils = _props$localeUtils === undefined ? {} : _props$localeUtils;

  if (!isNaN(firstDayOfWeek)) {
    return firstDayOfWeek;
  }
  if (localeUtils.getFirstDayOfWeek) {
    return localeUtils.getFirstDayOfWeek(locale);
  }
  return 0;
}

function isRangeOfDates(value) {
  return !!(value && value.from && value.to);
}

function getMonthsDiff(d1, d2) {
  return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
}

function getWeekArray(d) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _LocaleUtils.getFirstDayOfWeek)();
  var fixedWeeks = arguments[2];

  var daysInMonth = getDaysInMonth(d);
  var dayArray = [];

  var week = [];
  var weekArray = [];

  for (var i = 1; i <= daysInMonth; i += 1) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12));
  }

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(week);
    }
  });

  // unshift days to start the first week
  var firstWeek = weekArray[0];
  for (var _i = 7 - firstWeek.length; _i > 0; _i -= 1) {
    var outsideDate = (0, _DateUtils.clone)(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
  }

  // push days until the end of the last week
  var lastWeek = weekArray[weekArray.length - 1];
  for (var _i2 = lastWeek.length; _i2 < 7; _i2 += 1) {
    var _outsideDate = (0, _DateUtils.clone)(lastWeek[lastWeek.length - 1]);
    _outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(_outsideDate);
  }

  // add extra weeks to reach 6 weeks
  if (fixedWeeks && weekArray.length < 6) {
    var lastExtraWeek = void 0;

    for (var _i3 = weekArray.length; _i3 < 6; _i3 += 1) {
      lastExtraWeek = weekArray[weekArray.length - 1];
      var lastDay = lastExtraWeek[lastExtraWeek.length - 1];
      var extraWeek = [];

      for (var j = 0; j < 7; j += 1) {
        var _outsideDate2 = (0, _DateUtils.clone)(lastDay);
        _outsideDate2.setDate(lastDay.getDate() + j + 1);
        extraWeek.push(_outsideDate2);
      }

      weekArray.push(extraWeek);
    }
  }

  return weekArray;
}

function startOfMonth(d) {
  var newDate = (0, _DateUtils.clone)(d);
  newDate.setDate(1);
  newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
  return newDate;
}

function getDayNodes(node, classNames) {
  var outsideClassName = void 0;
  if (classNames === _classNames2.default) {
    // When using CSS modules prefix the modifier as required by the BEM syntax
    outsideClassName = classNames.day + '--' + classNames.outside;
  } else {
    outsideClassName = '' + classNames.outside;
  }
  var dayQuery = classNames.day.replace(/ /g, '.');
  var outsideDayQuery = outsideClassName.replace(/ /g, '.');
  var selector = '.' + dayQuery + ':not(.' + outsideDayQuery + ')';
  return node.querySelectorAll(selector);
}

function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList, 0);
}

function hasOwnProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
//# sourceMappingURL=Helpers.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/LocaleUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDay = formatDay;
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekdayShort = formatWeekdayShort;
exports.formatWeekdayLong = formatWeekdayLong;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getMonths = getMonths;
var WEEKDAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDay(day) {
  return day.toDateString();
}

function formatMonthTitle(d) {
  return MONTHS[d.getMonth()] + ' ' + d.getFullYear();
}

function formatWeekdayShort(i) {
  return WEEKDAYS_SHORT[i];
}

function formatWeekdayLong(i) {
  return WEEKDAYS_LONG[i];
}

function getFirstDayOfWeek() {
  return 0;
}

function getMonths() {
  return MONTHS;
}

exports.default = {
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getFirstDayOfWeek: getFirstDayOfWeek,
  getMonths: getMonths
};
//# sourceMappingURL=LocaleUtils.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/ModifiersUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dayMatchesModifier = dayMatchesModifier;
exports.getModifiersForDay = getModifiersForDay;

var _DateUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/DateUtils.js");

var _Helpers = __webpack_require__("./node_modules/react-day-picker/lib/src/Helpers.js");

/**
 * Return `true` if a date matches the specified modifier.
 *
 * @export
 * @param {Date} day
 * @param {Any} modifier
 * @return {Boolean}
 */
function dayMatchesModifier(day, modifier) {
  if (!modifier) {
    return false;
  }
  var arr = Array.isArray(modifier) ? modifier : [modifier];
  return arr.some(function (mod) {
    if (!mod) {
      return false;
    }
    if (mod instanceof Date) {
      return (0, _DateUtils.isSameDay)(day, mod);
    }
    if ((0, _Helpers.isRangeOfDates)(mod)) {
      return (0, _DateUtils.isDayInRange)(day, mod);
    }
    if (mod.after && mod.before && (0, _DateUtils.isDayAfter)(mod.before, mod.after)) {
      return (0, _DateUtils.isDayAfter)(day, mod.after) && (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after && mod.before && ((0, _DateUtils.isDayAfter)(mod.after, mod.before) || (0, _DateUtils.isSameDay)(mod.after, mod.before))) {
      return (0, _DateUtils.isDayAfter)(day, mod.after) || (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after) {
      return (0, _DateUtils.isDayAfter)(day, mod.after);
    }
    if (mod.before) {
      return (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.daysOfWeek) {
      return mod.daysOfWeek.some(function (dayOfWeek) {
        return day.getDay() === dayOfWeek;
      });
    }
    if (typeof mod === 'function') {
      return mod(day);
    }
    return false;
  });
}

/**
 * Return the modifiers matching the given day for the given
 * object of modifiers.
 *
 * @export
 * @param {Date} day
 * @param {Object} [modifiersObj={}]
 * @return {Array}
 */
function getModifiersForDay(day) {
  var modifiersObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.keys(modifiersObj).reduce(function (modifiers, modifierName) {
    var value = modifiersObj[modifierName];
    if (dayMatchesModifier(day, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

exports.default = { dayMatchesModifier: dayMatchesModifier, getModifiersForDay: getModifiersForDay };
//# sourceMappingURL=ModifiersUtils.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/Month.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Weekdays = __webpack_require__("./node_modules/react-day-picker/lib/src/Weekdays.js");

var _Weekdays2 = _interopRequireDefault(_Weekdays);

var _Day = __webpack_require__("./node_modules/react-day-picker/lib/src/Day.js");

var _Day2 = _interopRequireDefault(_Day);

var _keys = __webpack_require__("./node_modules/react-day-picker/lib/src/keys.js");

var _ModifiersUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/ModifiersUtils.js");

var ModifiersUtils = _interopRequireWildcard(_ModifiersUtils);

var _Helpers = __webpack_require__("./node_modules/react-day-picker/lib/src/Helpers.js");

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = __webpack_require__("./node_modules/react-day-picker/lib/src/DateUtils.js");

var DateUtils = _interopRequireWildcard(_DateUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_Component) {
  _inherits(Month, _Component);

  function Month() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Month);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Month.__proto__ || Object.getPrototypeOf(Month)).call.apply(_ref, [this].concat(args))), _this), _this.renderDay = function (day) {
      var monthNumber = _this.props.month.getMonth();
      var propModifiers = Helpers.getModifiersFromProps(_this.props);
      var dayModifiers = ModifiersUtils.getModifiersForDay(day, propModifiers);
      if (DateUtils.isSameDay(day, new Date()) && !Object.prototype.hasOwnProperty.call(propModifiers, _this.props.classNames.today)) {
        dayModifiers.push(_this.props.classNames.today);
      }
      if (day.getMonth() !== monthNumber) {
        dayModifiers.push(_this.props.classNames.outside);
      }

      var isOutside = day.getMonth() !== monthNumber;
      var tabIndex = -1;
      // Focus on the first day of the month
      if (_this.props.onDayClick && !isOutside && day.getDate() === 1) {
        tabIndex = _this.props.tabIndex; // eslint-disable-line prefer-destructuring
      }
      var key = '' + day.getFullYear() + day.getMonth() + day.getDate();
      var modifiers = {};
      dayModifiers.forEach(function (modifier) {
        modifiers[modifier] = true;
      });

      return _react2.default.createElement(
        _Day2.default,
        {
          key: '' + (isOutside ? 'outside-' : '') + key,
          classNames: _this.props.classNames,
          day: day,
          modifiers: modifiers,
          modifiersStyles: _this.props.modifiersStyles,
          empty: isOutside && !_this.props.showOutsideDays && !_this.props.fixedWeeks,
          tabIndex: tabIndex,
          ariaLabel: _this.props.localeUtils.formatDay(day, _this.props.locale),
          ariaDisabled: isOutside || dayModifiers.indexOf('disabled') > -1,
          ariaSelected: dayModifiers.indexOf('selected') > -1,
          onClick: _this.props.onDayClick,
          onFocus: _this.props.onDayFocus,
          onKeyDown: _this.props.onDayKeyDown,
          onMouseEnter: _this.props.onDayMouseEnter,
          onMouseLeave: _this.props.onDayMouseLeave,
          onMouseDown: _this.props.onDayMouseDown,
          onMouseUp: _this.props.onDayMouseUp,
          onTouchEnd: _this.props.onDayTouchEnd,
          onTouchStart: _this.props.onDayTouchStart
        },
        _this.props.renderDay(day, modifiers)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Month, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classNames = _props.classNames,
          month = _props.month,
          months = _props.months,
          fixedWeeks = _props.fixedWeeks,
          captionElement = _props.captionElement,
          weekdayElement = _props.weekdayElement,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          firstDayOfWeek = _props.firstDayOfWeek,
          onCaptionClick = _props.onCaptionClick,
          showWeekNumbers = _props.showWeekNumbers,
          showWeekDays = _props.showWeekDays,
          onWeekClick = _props.onWeekClick;


      var captionProps = {
        date: month,
        classNames: classNames,
        months: months,
        localeUtils: localeUtils,
        locale: locale,
        onClick: onCaptionClick ? function (e) {
          return onCaptionClick(month, e);
        } : undefined
      };
      var caption = _react2.default.isValidElement(captionElement) ? _react2.default.cloneElement(captionElement, captionProps) : _react2.default.createElement(captionElement, captionProps);

      var weeks = Helpers.getWeekArray(month, firstDayOfWeek, fixedWeeks);
      return _react2.default.createElement(
        'div',
        { className: classNames.month, role: 'grid' },
        caption,
        showWeekDays && _react2.default.createElement(_Weekdays2.default, {
          classNames: classNames,
          weekdaysShort: weekdaysShort,
          weekdaysLong: weekdaysLong,
          firstDayOfWeek: firstDayOfWeek,
          showWeekNumbers: showWeekNumbers,
          locale: locale,
          localeUtils: localeUtils,
          weekdayElement: weekdayElement
        }),
        _react2.default.createElement(
          'div',
          { className: classNames.body, role: 'rowgroup' },
          weeks.map(function (week) {
            var weekNumber = void 0;
            if (showWeekNumbers) {
              weekNumber = DateUtils.getWeekNumber(week[6]);
            }
            return _react2.default.createElement(
              'div',
              {
                key: week[0].getTime(),
                className: classNames.week,
                role: 'row'
              },
              showWeekNumbers && _react2.default.createElement(
                'div',
                {
                  className: classNames.weekNumber,
                  tabIndex: onWeekClick ? 0 : -1,
                  role: 'gridcell',
                  onClick: onWeekClick ? function (e) {
                    return onWeekClick(weekNumber, week, e);
                  } : undefined,
                  onKeyUp: onWeekClick ? function (e) {
                    return e.keyCode === _keys.ENTER && onWeekClick(weekNumber, week, e);
                  } : undefined
                },
                _this2.props.renderWeek(weekNumber, week, month)
              ),
              week.map(_this2.renderDay)
            );
          })
        )
      );
    }
  }]);

  return Month;
}(_react.Component);

exports.default = Month;
Month.propTypes =  true ? {
  classNames: _propTypes2.default.shape({
    body: _propTypes2.default.string.isRequired,
    month: _propTypes2.default.string.isRequired,
    outside: _propTypes2.default.string.isRequired,
    today: _propTypes2.default.string.isRequired,
    week: _propTypes2.default.string.isRequired
  }).isRequired,
  tabIndex: _propTypes2.default.number,

  month: _propTypes2.default.instanceOf(Date).isRequired,
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),

  modifiersStyles: _propTypes2.default.object,

  showWeekDays: _propTypes2.default.bool,
  showOutsideDays: _propTypes2.default.bool,

  renderDay: _propTypes2.default.func.isRequired,
  renderWeek: _propTypes2.default.func.isRequired,

  captionElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component)]).isRequired,
  weekdayElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component)]),

  fixedWeeks: _propTypes2.default.bool,
  showWeekNumbers: _propTypes2.default.bool,

  locale: _propTypes2.default.string.isRequired,
  localeUtils: _propTypes2.default.object.isRequired,
  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string),
  firstDayOfWeek: _propTypes2.default.number.isRequired,

  onCaptionClick: _propTypes2.default.func,
  onDayClick: _propTypes2.default.func,
  onDayFocus: _propTypes2.default.func,
  onDayKeyDown: _propTypes2.default.func,
  onDayMouseEnter: _propTypes2.default.func,
  onDayMouseLeave: _propTypes2.default.func,
  onDayMouseDown: _propTypes2.default.func,
  onDayMouseUp: _propTypes2.default.func,
  onDayTouchEnd: _propTypes2.default.func,
  onDayTouchStart: _propTypes2.default.func,
  onWeekClick: _propTypes2.default.func
} : {};
//# sourceMappingURL=Month.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/Navbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classNames = __webpack_require__("./node_modules/react-day-picker/lib/src/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

var _keys = __webpack_require__("./node_modules/react-day-picker/lib/src/keys.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.handleNextClick = function () {
      if (_this.props.onNextClick) {
        _this.props.onNextClick();
      }
    }, _this.handlePreviousClick = function () {
      if (_this.props.onPreviousClick) {
        _this.props.onPreviousClick();
      }
    }, _this.handleNextKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handleNextClick();
    }, _this.handlePreviousKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handlePreviousClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.labels !== this.props.labels || nextProps.dir !== this.props.dir || this.props.showPreviousButton !== nextProps.showPreviousButton || this.props.showNextButton !== nextProps.showNextButton;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          className = _props.className,
          showPreviousButton = _props.showPreviousButton,
          showNextButton = _props.showNextButton,
          labels = _props.labels,
          dir = _props.dir;


      var previousClickHandler = void 0;
      var nextClickHandler = void 0;
      var previousKeyDownHandler = void 0;
      var nextKeyDownHandler = void 0;
      var shouldShowPrevious = void 0;
      var shouldShowNext = void 0;

      if (dir === 'rtl') {
        previousClickHandler = this.handleNextClick;
        nextClickHandler = this.handlePreviousClick;
        previousKeyDownHandler = this.handleNextKeyDown;
        nextKeyDownHandler = this.handlePreviousKeyDown;
        shouldShowNext = showPreviousButton;
        shouldShowPrevious = showNextButton;
      } else {
        previousClickHandler = this.handlePreviousClick;
        nextClickHandler = this.handleNextClick;
        previousKeyDownHandler = this.handlePreviousKeyDown;
        nextKeyDownHandler = this.handleNextKeyDown;
        shouldShowNext = showNextButton;
        shouldShowPrevious = showPreviousButton;
      }

      var previousClassName = shouldShowPrevious ? classNames.navButtonPrev : classNames.navButtonPrev + ' ' + classNames.navButtonInteractionDisabled;

      var nextClassName = shouldShowNext ? classNames.navButtonNext : classNames.navButtonNext + ' ' + classNames.navButtonInteractionDisabled;

      var previousButton = _react2.default.createElement('span', {
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.previousMonth,
        key: 'previous',
        className: previousClassName,
        onKeyDown: shouldShowPrevious ? previousKeyDownHandler : undefined,
        onClick: shouldShowPrevious ? previousClickHandler : undefined
      });

      var nextButton = _react2.default.createElement('span', {
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.nextMonth,
        key: 'right',
        className: nextClassName,
        onKeyDown: shouldShowNext ? nextKeyDownHandler : undefined,
        onClick: shouldShowNext ? nextClickHandler : undefined
      });

      return _react2.default.createElement(
        'div',
        { className: className || classNames.navBar },
        dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
      );
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.defaultProps = {
  classNames: _classNames2.default,
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true
};
exports.default = Navbar;
Navbar.propTypes =  true ? {
  classNames: _propTypes2.default.shape({
    navBar: _propTypes2.default.string.isRequired,
    navButtonPrev: _propTypes2.default.string.isRequired,
    navButtonNext: _propTypes2.default.string.isRequired
  }),
  className: _propTypes2.default.string,
  showPreviousButton: _propTypes2.default.bool,
  showNextButton: _propTypes2.default.bool,
  onPreviousClick: _propTypes2.default.func,
  onNextClick: _propTypes2.default.func,
  dir: _propTypes2.default.string,
  labels: _propTypes2.default.shape({
    previousMonth: _propTypes2.default.string.isRequired,
    nextMonth: _propTypes2.default.string.isRequired
  })
} : {};
//# sourceMappingURL=Navbar.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/Weekday.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekday = function (_Component) {
  _inherits(Weekday, _Component);

  function Weekday() {
    _classCallCheck(this, Weekday);

    return _possibleConstructorReturn(this, (Weekday.__proto__ || Object.getPrototypeOf(Weekday)).apply(this, arguments));
  }

  _createClass(Weekday, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          weekday = _props.weekday,
          className = _props.className,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          localeUtils = _props.localeUtils,
          locale = _props.locale;

      var title = void 0;
      if (weekdaysLong) {
        title = weekdaysLong[weekday];
      } else {
        title = localeUtils.formatWeekdayLong(weekday, locale);
      }
      var content = void 0;
      if (weekdaysShort) {
        content = weekdaysShort[weekday];
      } else {
        content = localeUtils.formatWeekdayShort(weekday, locale);
      }

      return _react2.default.createElement(
        'div',
        { className: className, role: 'columnheader' },
        _react2.default.createElement(
          'abbr',
          { title: title },
          content
        )
      );
    }
  }]);

  return Weekday;
}(_react.Component);

exports.default = Weekday;
Weekday.propTypes =  true ? {
  weekday: _propTypes2.default.number,
  className: _propTypes2.default.string,
  locale: _propTypes2.default.string,
  localeUtils: _propTypes2.default.object,

  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string)
} : {};
//# sourceMappingURL=Weekday.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/Weekdays.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekdays = function (_Component) {
  _inherits(Weekdays, _Component);

  function Weekdays() {
    _classCallCheck(this, Weekdays);

    return _possibleConstructorReturn(this, (Weekdays.__proto__ || Object.getPrototypeOf(Weekdays)).apply(this, arguments));
  }

  _createClass(Weekdays, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          firstDayOfWeek = _props.firstDayOfWeek,
          showWeekNumbers = _props.showWeekNumbers,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          weekdayElement = _props.weekdayElement;

      var days = [];
      for (var i = 0; i < 7; i += 1) {
        var weekday = (i + firstDayOfWeek) % 7;
        var elementProps = {
          key: i,
          className: classNames.weekday,
          weekday: weekday,
          weekdaysLong: weekdaysLong,
          weekdaysShort: weekdaysShort,
          localeUtils: localeUtils,
          locale: locale
        };
        var element = _react2.default.isValidElement(weekdayElement) ? _react2.default.cloneElement(weekdayElement, elementProps) : _react2.default.createElement(weekdayElement, elementProps);
        days.push(element);
      }

      return _react2.default.createElement(
        'div',
        { className: classNames.weekdays, role: 'rowgroup' },
        _react2.default.createElement(
          'div',
          { className: classNames.weekdaysRow, role: 'row' },
          showWeekNumbers && _react2.default.createElement('div', { className: classNames.weekday }),
          days
        )
      );
    }
  }]);

  return Weekdays;
}(_react.Component);

exports.default = Weekdays;
Weekdays.propTypes =  true ? {
  classNames: _propTypes2.default.shape({
    weekday: _propTypes2.default.string.isRequired,
    weekdays: _propTypes2.default.string.isRequired,
    weekdaysRow: _propTypes2.default.string.isRequired
  }).isRequired,

  firstDayOfWeek: _propTypes2.default.number.isRequired,
  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string),
  showWeekNumbers: _propTypes2.default.bool,
  locale: _propTypes2.default.string.isRequired,
  localeUtils: _propTypes2.default.object.isRequired,
  weekdayElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component)])
} : {};
//# sourceMappingURL=Weekdays.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/classNames.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Proxy object to map classnames when css modules are not used

exports.default = {
  container: 'DayPicker',
  wrapper: 'DayPicker-wrapper',
  interactionDisabled: 'DayPicker--interactionDisabled',
  months: 'DayPicker-Months',
  month: 'DayPicker-Month',

  navBar: 'DayPicker-NavBar',
  navButtonPrev: 'DayPicker-NavButton DayPicker-NavButton--prev',
  navButtonNext: 'DayPicker-NavButton DayPicker-NavButton--next',
  navButtonInteractionDisabled: 'DayPicker-NavButton--interactionDisabled',

  caption: 'DayPicker-Caption',
  weekdays: 'DayPicker-Weekdays',
  weekdaysRow: 'DayPicker-WeekdaysRow',
  weekday: 'DayPicker-Weekday',
  body: 'DayPicker-Body',
  week: 'DayPicker-Week',
  weekNumber: 'DayPicker-WeekNumber',
  day: 'DayPicker-Day',
  footer: 'DayPicker-Footer',
  todayButton: 'DayPicker-TodayButton',

  // default modifiers
  today: 'today',
  selected: 'selected',
  disabled: 'disabled',
  outside: 'outside'
};
//# sourceMappingURL=classNames.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/src/keys.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LEFT = exports.LEFT = 37;
var UP = exports.UP = 38;
var RIGHT = exports.RIGHT = 39;
var DOWN = exports.DOWN = 40;
var ENTER = exports.ENTER = 13;
var SPACE = exports.SPACE = 32;
var ESC = exports.ESC = 27;
var TAB = exports.TAB = 9;
//# sourceMappingURL=keys.js.map

/***/ }),

/***/ "./node_modules/react-emotion/dist/index.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.esm.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["flush"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["hydrate"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["cx"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["merge"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["getRegisteredStyles"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["injectGlobal"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["keyframes"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "css", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["css"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["sheet"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["caches"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_emotion_styled__ = __webpack_require__("./node_modules/create-emotion-styled/dist/index.esm.js");





var index = Object(__WEBPACK_IMPORTED_MODULE_2_create_emotion_styled__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_emotion__, __WEBPACK_IMPORTED_MODULE_0_react___default.a);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.4
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = __webpack_require__("./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_PropTypes__ = __webpack_require__("./node_modules/react-redux/es/utils/PropTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_warning__ = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");





var didWarnAboutReceivingStore = false;

function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }

  didWarnAboutReceivingStore = true;
  Object(__WEBPACK_IMPORTED_MODULE_4__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider(storeKey) {
  var _Provider$childContex;

  if (storeKey === void 0) {
    storeKey = 'store';
  }

  var subscriptionKey = storeKey + "Subscription";

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(Provider, _Component);

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      var _this;

      _this = _Component.call(this, props, context) || this;
      _this[storeKey] = props.store;
      return _this;
    }

    _proto.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  if (true) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_3__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_3__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_3__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);
  return Provider;
}
/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hoist_non_react_statics__ = __webpack_require__("./node_modules/next/node_modules/hoist-non-react-statics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_is__ = __webpack_require__("./node_modules/react-is/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_Subscription__ = __webpack_require__("./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_PropTypes__ = __webpack_require__("./node_modules/react-redux/es/utils/PropTypes.js");










var hotReloadingVersion = 0;
var dummyState = {};

function noop() {}

function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);

        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };
  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  var _contextTypes, _childContextTypes;

  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      connectOptions = Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;
  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_9__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_9__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_9__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);
  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_5_invariant___default()(Object(__WEBPACK_IMPORTED_MODULE_7_react_is__["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_extends__["a" /* default */])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

      /* eslint-disable react/no-deprecated */

    });

    var Connect =
    /*#__PURE__*/
    function (_Component) {
      Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(Connect, _Component);

      function Connect(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
        __WEBPACK_IMPORTED_MODULE_5_invariant___default()(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

        _this.initSelector();

        _this.initSubscription();

        return _this;
      }

      var _proto = Connect.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref3;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
      };

      _proto.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.

        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      _proto.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_5_invariant___default()(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
        return this.wrappedInstance;
      };

      _proto.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      _proto.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      _proto.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_8__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.

        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      _proto.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      _proto.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad

        var withExtras = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props);

        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      _proto.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_6_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);
    /* eslint-enable react/no-deprecated */


    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (true) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector(); // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.

          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }

          this.initSubscription();

          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_4_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_shallowEqual__ = __webpack_require__("./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapDispatchToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapStateToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mergeProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectorFactory__ = __webpack_require__("./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? __WEBPACK_IMPORTED_MODULE_2__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? __WEBPACK_IMPORTED_MODULE_5__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? __WEBPACK_IMPORTED_MODULE_4__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? __WEBPACK_IMPORTED_MODULE_6__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? __WEBPACK_IMPORTED_MODULE_7__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? __WEBPACK_IMPORTED_MODULE_3__utils_shallowEqual__["a" /* default */] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? __WEBPACK_IMPORTED_MODULE_3__utils_shallowEqual__["a" /* default */] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? __WEBPACK_IMPORTED_MODULE_3__utils_shallowEqual__["a" /* default */] : _ref3$areMergedPropsE,
        extraOptions = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_verifyPlainObject__ = __webpack_require__("./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(__WEBPACK_IMPORTED_MODULE_1__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verifySubselectors__ = __webpack_require__("./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_1__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__("./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__("./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__("./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });





/***/ }),

/***/ "./node_modules/react-redux/es/utils/PropTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);

var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});
var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;

      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub, onStateChange) {
    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isPlainObject;
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPlainObject__ = __webpack_require__("./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__("./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/rheostat/lib/Slider.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SliderConstants = __webpack_require__("./node_modules/rheostat/lib/constants/SliderConstants.js");

var SliderConstants = _interopRequireWildcard(_SliderConstants);

var _linear = __webpack_require__("./node_modules/rheostat/lib/algorithms/linear.js");

var _linear2 = _interopRequireDefault(_linear);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* globals document */
/* eslint react/no-array-index-key: 1 */

function getClassName(props) {
  var orientation = props.orientation === 'vertical' ? 'rheostat-vertical' : 'rheostat-horizontal';

  return ['rheostat', orientation].concat(props.className.split(' ')).join(' ');
}

var has = Object.prototype.hasOwnProperty;

var PropTypeArrOfNumber = _propTypes2['default'].arrayOf(_propTypes2['default'].number);
var PropTypeReactComponent = _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].string]);

function getHandleFor(ev) {
  return Number(ev.currentTarget.getAttribute('data-handle-key'));
}

function killEvent(ev) {
  ev.stopPropagation();
  ev.preventDefault();
}

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function () {
      function render() {
        return _react2['default'].createElement('button', _extends({}, this.props, { type: 'button' }));
      }

      return render;
    }()
  }]);

  return Button;
}(_react2['default'].Component);

var propTypes = {
  // the algorithm to use
  algorithm: _propTypes2['default'].shape({
    getValue: _propTypes2['default'].func,
    getPosition: _propTypes2['default'].func
  }),
  // any children you pass in
  children: _propTypes2['default'].node,
  // standard class name you'd like to apply to the root element
  className: _propTypes2['default'].string,
  // prevent the slider from moving when clicked
  disabled: _propTypes2['default'].bool,
  // a custom handle you can pass in
  handle: PropTypeReactComponent,
  // the maximum possible value
  max: _propTypes2['default'].number,
  // the minimum possible value
  min: _propTypes2['default'].number,
  // called on click
  onClick: _propTypes2['default'].func,
  // called whenever the user is done changing values on the slider
  onChange: _propTypes2['default'].func,
  // called on key press
  onKeyPress: _propTypes2['default'].func,
  // called when you finish dragging a handle
  onSliderDragEnd: _propTypes2['default'].func,
  // called every time the slider is dragged and the value changes
  onSliderDragMove: _propTypes2['default'].func,
  // called when you start dragging a handle
  onSliderDragStart: _propTypes2['default'].func,
  // called whenever the user is actively changing the values on the slider
  // (dragging, clicked, keypress)
  onValuesUpdated: _propTypes2['default'].func,
  // the orientation
  orientation: _propTypes2['default'].oneOf(['horizontal', 'vertical']),
  // a component for rendering the pits
  pitComponent: PropTypeReactComponent,
  // the points that pits are rendered on
  pitPoints: PropTypeArrOfNumber,
  // a custom progress bar you can pass in
  progressBar: PropTypeReactComponent,
  // should we snap?
  snap: _propTypes2['default'].bool,
  // the points we should snap to
  snapPoints: PropTypeArrOfNumber,
  // whether a proposed update is valid
  getNextHandlePosition: _propTypes2['default'].func,
  // the values
  values: PropTypeArrOfNumber
};

var defaultProps = {
  algorithm: _linear2['default'],
  className: '',
  children: null,
  disabled: false,
  handle: Button,
  max: SliderConstants.PERCENT_FULL,
  min: SliderConstants.PERCENT_EMPTY,
  onClick: null,
  onChange: null,
  onKeyPress: null,
  onSliderDragEnd: null,
  onSliderDragMove: null,
  onSliderDragStart: null,
  onValuesUpdated: null,
  orientation: 'horizontal',
  pitComponent: null,
  pitPoints: [],
  progressBar: 'div',
  snap: false,
  snapPoints: [],
  getNextHandlePosition: null,
  values: [SliderConstants.PERCENT_EMPTY]
};

var Rheostat = function (_React$Component2) {
  _inherits(Rheostat, _React$Component2);

  function Rheostat(props) {
    _classCallCheck(this, Rheostat);

    var _this2 = _possibleConstructorReturn(this, (Rheostat.__proto__ || Object.getPrototypeOf(Rheostat)).call(this, props));

    var _this2$props = _this2.props,
        algorithm = _this2$props.algorithm,
        max = _this2$props.max,
        min = _this2$props.min,
        values = _this2$props.values;

    _this2.state = {
      className: getClassName(_this2.props),
      handlePos: values.map(function (value) {
        return algorithm.getPosition(value, min, max);
      }),
      handleDimensions: 0,
      // mousePos: null,
      sliderBox: {},
      slidingIndex: null,
      values: values
    };
    _this2.getPublicState = _this2.getPublicState.bind(_this2);
    _this2.getSliderBoundingBox = _this2.getSliderBoundingBox.bind(_this2);
    _this2.getProgressStyle = _this2.getProgressStyle.bind(_this2);
    _this2.getMinValue = _this2.getMinValue.bind(_this2);
    _this2.getMaxValue = _this2.getMaxValue.bind(_this2);
    _this2.getHandleDimensions = _this2.getHandleDimensions.bind(_this2);
    _this2.getClosestSnapPoint = _this2.getClosestSnapPoint.bind(_this2);
    _this2.getSnapPosition = _this2.getSnapPosition.bind(_this2);
    _this2.getNextPositionForKey = _this2.getNextPositionForKey.bind(_this2);
    _this2.getNextState = _this2.getNextState.bind(_this2);
    _this2.handleClick = _this2.handleClick.bind(_this2);
    _this2.getClosestHandle = _this2.getClosestHandle.bind(_this2);
    _this2.setStartSlide = _this2.setStartSlide.bind(_this2);
    _this2.startMouseSlide = _this2.startMouseSlide.bind(_this2);
    _this2.startTouchSlide = _this2.startTouchSlide.bind(_this2);
    _this2.handleMouseSlide = _this2.handleMouseSlide.bind(_this2);
    _this2.handleTouchSlide = _this2.handleTouchSlide.bind(_this2);
    _this2.handleSlide = _this2.handleSlide.bind(_this2);
    _this2.endSlide = _this2.endSlide.bind(_this2);
    _this2.handleKeydown = _this2.handleKeydown.bind(_this2);
    _this2.validatePosition = _this2.validatePosition.bind(_this2);
    _this2.validateValues = _this2.validateValues.bind(_this2);
    _this2.canMove = _this2.canMove.bind(_this2);
    _this2.fireChangeEvent = _this2.fireChangeEvent.bind(_this2);
    _this2.slideTo = _this2.slideTo.bind(_this2);
    _this2.updateNewValues = _this2.updateNewValues.bind(_this2);
    _this2.setRef = _this2.setRef.bind(_this2);
    _this2.invalidatePitStyleCache = _this2.invalidatePitStyleCache.bind(_this2);

    _this2.pitStyleCache = {};
    return _this2;
  }

  _createClass(Rheostat, [{
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var _props = this.props,
            className = _props.className,
            disabled = _props.disabled,
            min = _props.min,
            max = _props.max,
            orientation = _props.orientation,
            pitPoints = _props.pitPoints,
            algorithm = _props.algorithm;
        var _state = this.state,
            values = _state.values,
            slidingIndex = _state.slidingIndex;


        var minMaxChanged = nextProps.min !== min || nextProps.max !== max;

        var valuesChanged = values.length !== nextProps.values.length || values.some(function (value, idx) {
          return nextProps.values[idx] !== value;
        });

        var orientationChanged = nextProps.className !== className || nextProps.orientation !== orientation;

        var algorithmChanged = nextProps.algorithm !== algorithm;

        var pitPointsChanged = nextProps.pitPoints !== pitPoints;

        var willBeDisabled = nextProps.disabled && !disabled;

        if (orientationChanged) {
          this.setState({
            className: getClassName(nextProps)
          });
        }

        if (minMaxChanged || valuesChanged) this.updateNewValues(nextProps);

        if (minMaxChanged || pitPointsChanged || orientationChanged || algorithmChanged) {
          this.invalidatePitStyleCache();
        }

        if (willBeDisabled && slidingIndex !== null) {
          this.endSlide();
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'getPublicState',
    value: function () {
      function getPublicState() {
        var _props2 = this.props,
            min = _props2.min,
            max = _props2.max;
        var values = this.state.values;


        return { max: max, min: min, values: values };
      }

      return getPublicState;
    }()

    // istanbul ignore next

  }, {
    key: 'getSliderBoundingBox',
    value: function () {
      function getSliderBoundingBox() {
        var rheostat = this.rheostat;

        var node = rheostat.getDOMNode ? rheostat.getDOMNode() : rheostat;
        var rect = node.getBoundingClientRect();

        return {
          height: rect.height || node.clientHeight,
          left: rect.left,
          top: rect.top,
          width: rect.width || node.clientWidth
        };
      }

      return getSliderBoundingBox;
    }()
  }, {
    key: 'getProgressStyle',
    value: function () {
      function getProgressStyle(idx) {
        var orientation = this.props.orientation;
        var handlePos = this.state.handlePos;


        var value = handlePos[idx];

        if (idx === 0) {
          return orientation === 'vertical' ? { height: String(value) + '%', top: 0 } : { left: 0, width: String(value) + '%' };
        }

        var prevValue = handlePos[idx - 1];
        var diffValue = value - prevValue;

        return orientation === 'vertical' ? { height: diffValue + '%', top: String(prevValue) + '%' } : { left: String(prevValue) + '%', width: diffValue + '%' };
      }

      return getProgressStyle;
    }()
  }, {
    key: 'getMinValue',
    value: function () {
      function getMinValue(idx) {
        var min = this.props.min;
        var values = this.state.values;

        return values[idx - 1] ? Math.max(min, values[idx - 1]) : min;
      }

      return getMinValue;
    }()
  }, {
    key: 'getMaxValue',
    value: function () {
      function getMaxValue(idx) {
        var max = this.props.max;
        var values = this.state.values;

        return values[idx + 1] ? Math.min(max, values[idx + 1]) : max;
      }

      return getMaxValue;
    }()

    // istanbul ignore next

  }, {
    key: 'getHandleDimensions',
    value: function () {
      function getHandleDimensions(ev, sliderBox) {
        var handleNode = ev.currentTarget || null;

        if (!handleNode) return 0;

        return this.props.orientation === 'vertical' ? handleNode.clientHeight / sliderBox.height * SliderConstants.PERCENT_FULL / 2 : handleNode.clientWidth / sliderBox.width * SliderConstants.PERCENT_FULL / 2;
      }

      return getHandleDimensions;
    }()
  }, {
    key: 'getClosestSnapPoint',
    value: function () {
      function getClosestSnapPoint(value) {
        var snapPoints = this.props.snapPoints;

        if (!snapPoints.length) return value;

        return snapPoints.reduce(function (snapTo, snap) {
          return Math.abs(snapTo - value) < Math.abs(snap - value) ? snapTo : snap;
        });
      }

      return getClosestSnapPoint;
    }()
  }, {
    key: 'getSnapPosition',
    value: function () {
      function getSnapPosition(positionPercent) {
        var _props3 = this.props,
            algorithm = _props3.algorithm,
            max = _props3.max,
            min = _props3.min,
            snap = _props3.snap;


        if (!snap) return positionPercent;

        var value = algorithm.getValue(positionPercent, min, max);

        var snapValue = this.getClosestSnapPoint(value);

        return algorithm.getPosition(snapValue, min, max);
      }

      return getSnapPosition;
    }()
  }, {
    key: 'getNextPositionForKey',
    value: function () {
      function getNextPositionForKey(idx, keyCode) {
        var _stepMultiplier;

        var _state2 = this.state,
            handlePos = _state2.handlePos,
            values = _state2.values;
        var _props4 = this.props,
            algorithm = _props4.algorithm,
            max = _props4.max,
            min = _props4.min,
            snapPoints = _props4.snapPoints,
            shouldSnap = _props4.snap;


        var proposedValue = values[idx];
        var proposedPercentage = handlePos[idx];
        var originalPercentage = proposedPercentage;
        var stepValue = 1;

        if (max >= 100) {
          proposedPercentage = Math.round(proposedPercentage);
        } else {
          stepValue = 100 / (max - min);
        }

        var currentIndex = null;

        if (shouldSnap) {
          currentIndex = snapPoints.indexOf(this.getClosestSnapPoint(values[idx]));
        }

        var stepMultiplier = (_stepMultiplier = {}, _defineProperty(_stepMultiplier, SliderConstants.KEYS.LEFT, function (v) {
          return v * -1;
        }), _defineProperty(_stepMultiplier, SliderConstants.KEYS.RIGHT, function (v) {
          return v * 1;
        }), _defineProperty(_stepMultiplier, SliderConstants.KEYS.UP, function (v) {
          return v * 1;
        }), _defineProperty(_stepMultiplier, SliderConstants.KEYS.DOWN, function (v) {
          return v * -1;
        }), _defineProperty(_stepMultiplier, SliderConstants.KEYS.PAGE_DOWN, function (v) {
          return v > 1 ? -v : v * -10;
        }), _defineProperty(_stepMultiplier, SliderConstants.KEYS.PAGE_UP, function (v) {
          return v > 1 ? v : v * 10;
        }), _stepMultiplier);

        if (has.call(stepMultiplier, keyCode)) {
          proposedPercentage += stepMultiplier[keyCode](stepValue);

          if (shouldSnap) {
            if (proposedPercentage > originalPercentage) {
              // move cursor right unless overflow
              if (currentIndex < snapPoints.length - 1) {
                proposedValue = snapPoints[currentIndex + 1];
              }
              // move cursor left unless there is overflow
            } else if (currentIndex > 0) {
              proposedValue = snapPoints[currentIndex - 1];
            }
          }
        } else if (keyCode === SliderConstants.KEYS.HOME) {
          proposedPercentage = SliderConstants.PERCENT_EMPTY;

          if (shouldSnap) {
            var _snapPoints = _slicedToArray(snapPoints, 1);

            proposedValue = _snapPoints[0];
          }
        } else if (keyCode === SliderConstants.KEYS.END) {
          proposedPercentage = SliderConstants.PERCENT_FULL;

          if (shouldSnap) {
            proposedValue = snapPoints[snapPoints.length - 1];
          }
        } else {
          return null;
        }

        return shouldSnap ? algorithm.getPosition(proposedValue, min, max) : proposedPercentage;
      }

      return getNextPositionForKey;
    }()
  }, {
    key: 'getNextState',
    value: function () {
      function getNextState(idx, proposedPosition) {
        var handlePos = this.state.handlePos;
        var _props5 = this.props,
            max = _props5.max,
            min = _props5.min,
            algorithm = _props5.algorithm;


        var actualPosition = this.validatePosition(idx, proposedPosition);

        var nextHandlePos = handlePos.map(function (pos, index) {
          return index === idx ? actualPosition : pos;
        });

        return {
          handlePos: nextHandlePos,
          values: nextHandlePos.map(function (pos) {
            return algorithm.getValue(pos, min, max);
          })
        };
      }

      return getNextState;
    }()
  }, {
    key: 'getClosestHandle',
    value: function () {
      function getClosestHandle(positionPercent) {
        var handlePos = this.state.handlePos;


        return handlePos.reduce(function (closestIdx, node, idx) {
          var challenger = Math.abs(handlePos[idx] - positionPercent);
          var current = Math.abs(handlePos[closestIdx] - positionPercent);
          return challenger < current ? idx : closestIdx;
        }, 0);
      }

      return getClosestHandle;
    }()

    // istanbul ignore next

  }, {
    key: 'setStartSlide',
    value: function () {
      function setStartSlide(ev /* , x, y */) {
        var sliderBox = this.getSliderBoundingBox();

        this.setState({
          handleDimensions: this.getHandleDimensions(ev, sliderBox),
          // mousePos: { x, y },
          sliderBox: sliderBox,
          slidingIndex: getHandleFor(ev)
        });
      }

      return setStartSlide;
    }()
  }, {
    key: 'setRef',
    value: function () {
      function setRef(ref) {
        this.rheostat = ref;
      }

      return setRef;
    }()

    // istanbul ignore next

  }, {
    key: 'startMouseSlide',
    value: function () {
      function startMouseSlide(ev) {
        this.setStartSlide(ev, ev.clientX, ev.clientY);

        if (typeof document.addEventListener === 'function') {
          document.addEventListener('mousemove', this.handleMouseSlide, false);
          document.addEventListener('mouseup', this.endSlide, false);
        } else {
          document.attachEvent('onmousemove', this.handleMouseSlide);
          document.attachEvent('onmouseup', this.endSlide);
        }

        killEvent(ev);
      }

      return startMouseSlide;
    }()

    // istanbul ignore next

  }, {
    key: 'startTouchSlide',
    value: function () {
      function startTouchSlide(ev) {
        var onSliderDragStart = this.props.onSliderDragStart;


        if (ev.changedTouches.length > 1) return;

        var touch = ev.changedTouches[0];

        this.setStartSlide(ev, touch.clientX, touch.clientY);

        document.addEventListener('touchmove', this.handleTouchSlide, false);
        document.addEventListener('touchend', this.endSlide, false);

        if (onSliderDragStart) onSliderDragStart();

        killEvent(ev);
      }

      return startTouchSlide;
    }()

    // istanbul ignore next

  }, {
    key: 'handleMouseSlide',
    value: function () {
      function handleMouseSlide(ev) {
        var slidingIndex = this.state.slidingIndex;

        if (slidingIndex === null) return;
        this.handleSlide(ev.clientX, ev.clientY);
        killEvent(ev);
      }

      return handleMouseSlide;
    }()

    // istanbul ignore next

  }, {
    key: 'handleTouchSlide',
    value: function () {
      function handleTouchSlide(ev) {
        var slidingIndex = this.state.slidingIndex;

        if (slidingIndex === null) return;

        if (ev.changedTouches.length > 1) {
          this.endSlide();
          return;
        }

        var touch = ev.changedTouches[0];

        this.handleSlide(touch.clientX, touch.clientY);
        killEvent(ev);
      }

      return handleTouchSlide;
    }()

    // istanbul ignore next

  }, {
    key: 'handleSlide',
    value: function () {
      function handleSlide(x, y) {
        var _props6 = this.props,
            orientation = _props6.orientation,
            onSliderDragMove = _props6.onSliderDragMove;
        var _state3 = this.state,
            idx = _state3.slidingIndex,
            sliderBox = _state3.sliderBox;


        var positionPercent = orientation === 'vertical' ? (y - sliderBox.top) / sliderBox.height * SliderConstants.PERCENT_FULL : (x - sliderBox.left) / sliderBox.width * SliderConstants.PERCENT_FULL;

        this.slideTo(idx, positionPercent);

        if (this.canMove(idx, positionPercent)) {
          if (onSliderDragMove) onSliderDragMove();
        }
      }

      return handleSlide;
    }()

    // istanbul ignore next

  }, {
    key: 'endSlide',
    value: function () {
      function endSlide() {
        var _this3 = this;

        var _props7 = this.props,
            onSliderDragEnd = _props7.onSliderDragEnd,
            snap = _props7.snap;
        var _state4 = this.state,
            slidingIndex = _state4.slidingIndex,
            handlePos = _state4.handlePos;


        this.setState({ slidingIndex: null });

        if (typeof document.removeEventListener === 'function') {
          document.removeEventListener('mouseup', this.endSlide, false);
          document.removeEventListener('touchend', this.endSlide, false);
          document.removeEventListener('touchmove', this.handleTouchSlide, false);
          document.removeEventListener('mousemove', this.handleMouseSlide, false);
        } else {
          document.detachEvent('onmousemove', this.handleMouseSlide);
          document.detachEvent('onmouseup', this.endSlide);
        }

        if (onSliderDragEnd) onSliderDragEnd();
        if (snap) {
          var positionPercent = this.getSnapPosition(handlePos[slidingIndex]);
          this.slideTo(slidingIndex, positionPercent, function () {
            return _this3.fireChangeEvent();
          });
        } else {
          this.fireChangeEvent();
        }
      }

      return endSlide;
    }()

    // istanbul ignore next

  }, {
    key: 'handleClick',
    value: function () {
      function handleClick(ev) {
        var _this4 = this;

        if (ev.target.getAttribute('data-handle-key')) {
          return;
        }

        var _props8 = this.props,
            orientation = _props8.orientation,
            onClick = _props8.onClick;

        // Calculate the position of the slider on the page so we can determine
        // the position where you click in relativity.

        var sliderBox = this.getSliderBoundingBox();

        var positionDecimal = orientation === 'vertical' ? (ev.clientY - sliderBox.top) / sliderBox.height : (ev.clientX - sliderBox.left) / sliderBox.width;

        var positionPercent = positionDecimal * SliderConstants.PERCENT_FULL;

        var handleId = this.getClosestHandle(positionPercent);

        var validPositionPercent = this.getSnapPosition(positionPercent);

        // Move the handle there
        this.slideTo(handleId, validPositionPercent, function () {
          return _this4.fireChangeEvent();
        });

        if (onClick) onClick();
      }

      return handleClick;
    }()

    // istanbul ignore next

  }, {
    key: 'handleKeydown',
    value: function () {
      function handleKeydown(ev) {
        var _this5 = this;

        var idx = getHandleFor(ev);

        if (ev.keyCode === SliderConstants.KEYS.ESC) {
          ev.currentTarget.blur();
          return;
        }

        var proposedPercentage = this.getNextPositionForKey(idx, ev.keyCode);

        if (proposedPercentage === null) return;

        if (this.canMove(idx, proposedPercentage)) {
          this.slideTo(idx, proposedPercentage, function () {
            return _this5.fireChangeEvent();
          });
          var onKeyPress = this.props.onKeyPress;

          if (onKeyPress) onKeyPress();
        }

        killEvent(ev);
      }

      return handleKeydown;
    }()

    // Apply user adjustments to position

  }, {
    key: 'userAdjustPosition',
    value: function () {
      function userAdjustPosition(idx, proposedPosition) {
        var getNextHandlePosition = this.props.getNextHandlePosition;

        var nextPosition = proposedPosition;
        if (getNextHandlePosition) {
          nextPosition = parseFloat(getNextHandlePosition(idx, proposedPosition));

          if (Number.isNaN(nextPosition) || nextPosition < SliderConstants.PERCENT_EMPTY || nextPosition > SliderConstants.PERCENT_FULL) {
            throw new TypeError('getNextHandlePosition returned invalid position. Valid positions are floats between 0 and 100');
          }
        }

        return nextPosition;
      }

      return userAdjustPosition;
    }()

    // Make sure the proposed position respects the bounds and
    // does not collide with other handles too much.

  }, {
    key: 'validatePosition',
    value: function () {
      function validatePosition(idx, proposedPosition) {
        var _state5 = this.state,
            handlePos = _state5.handlePos,
            handleDimensions = _state5.handleDimensions;


        var nextPosition = this.userAdjustPosition(idx, proposedPosition);

        return Math.max(Math.min(nextPosition, handlePos[idx + 1] !== undefined ? handlePos[idx + 1] - handleDimensions : SliderConstants.PERCENT_FULL // 100% is the highest value
        ), handlePos[idx - 1] !== undefined ? handlePos[idx - 1] + handleDimensions : SliderConstants.PERCENT_EMPTY // 0% is the lowest value
        );
      }

      return validatePosition;
    }()
  }, {
    key: 'validateValues',
    value: function () {
      function validateValues(proposedValues, props) {
        var _ref = props || this.props,
            max = _ref.max,
            min = _ref.min;

        return proposedValues.map(function (value, idx, values) {
          var realValue = Math.max(Math.min(value, max), min);

          if (values.length && realValue < values[idx - 1]) {
            return values[idx - 1];
          }

          return realValue;
        });
      }

      return validateValues;
    }()

    // Can we move the slider to the given position?

  }, {
    key: 'canMove',
    value: function () {
      function canMove(idx, proposedPosition) {
        var _state6 = this.state,
            handlePos = _state6.handlePos,
            handleDimensions = _state6.handleDimensions;


        if (proposedPosition < SliderConstants.PERCENT_EMPTY) return false;
        if (proposedPosition > SliderConstants.PERCENT_FULL) return false;

        var nextHandlePosition = handlePos[idx + 1] !== undefined ? handlePos[idx + 1] - handleDimensions : Infinity;

        if (proposedPosition > nextHandlePosition) return false;

        var prevHandlePosition = handlePos[idx - 1] !== undefined ? handlePos[idx - 1] + handleDimensions : -Infinity;

        if (proposedPosition < prevHandlePosition) return false;

        return true;
      }

      return canMove;
    }()

    // istanbul ignore next

  }, {
    key: 'fireChangeEvent',
    value: function () {
      function fireChangeEvent() {
        var onChange = this.props.onChange;

        if (onChange) onChange(this.getPublicState());
      }

      return fireChangeEvent;
    }()

    // istanbul ignore next

  }, {
    key: 'slideTo',
    value: function () {
      function slideTo(idx, proposedPosition, onAfterSet) {
        var _this6 = this;

        var nextState = this.getNextState(idx, proposedPosition);

        this.setState(nextState, function () {
          var onValuesUpdated = _this6.props.onValuesUpdated;

          if (onValuesUpdated) onValuesUpdated(_this6.getPublicState());
          if (onAfterSet) onAfterSet();
        });
      }

      return slideTo;
    }()

    // istanbul ignore next

  }, {
    key: 'updateNewValues',
    value: function () {
      function updateNewValues(nextProps) {
        var _this7 = this;

        var slidingIndex = this.state.slidingIndex;

        // Don't update while the slider is sliding

        if (slidingIndex !== null) {
          return;
        }

        var max = nextProps.max,
            min = nextProps.min,
            values = nextProps.values;
        var algorithm = this.props.algorithm;


        var nextValues = this.validateValues(values, nextProps);

        this.setState({
          handlePos: nextValues.map(function (value) {
            return algorithm.getPosition(value, min, max);
          }),
          values: nextValues
        }, function () {
          return _this7.fireChangeEvent();
        });
      }

      return updateNewValues;
    }()
  }, {
    key: 'invalidatePitStyleCache',
    value: function () {
      function invalidatePitStyleCache() {
        this.pitStyleCache = {};
      }

      return invalidatePitStyleCache;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this8 = this;

        var _props9 = this.props,
            algorithm = _props9.algorithm,
            children = _props9.children,
            disabled = _props9.disabled,
            Handle = _props9.handle,
            max = _props9.max,
            min = _props9.min,
            orientation = _props9.orientation,
            PitComponent = _props9.pitComponent,
            pitPoints = _props9.pitPoints,
            ProgressBar = _props9.progressBar;
        var _state7 = this.state,
            className = _state7.className,
            handlePos = _state7.handlePos,
            values = _state7.values;


        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          _react2['default'].createElement(
            'div',
            {
              className: className,
              ref: this.setRef,
              onClick: !disabled ? this.handleClick : undefined,
              style: { position: 'relative' }
            },
            _react2['default'].createElement('div', { className: 'rheostat-background' }),
            handlePos.map(function (pos, idx) {
              var handleStyle = orientation === 'vertical' ? { top: String(pos) + '%', position: 'absolute' } : { left: String(pos) + '%', position: 'absolute' };

              return _react2['default'].createElement(Handle, {
                'aria-valuemax': _this8.getMaxValue(idx),
                'aria-valuemin': _this8.getMinValue(idx),
                'aria-valuenow': values[idx],
                'aria-disabled': disabled,
                'data-handle-key': idx,
                className: 'rheostat-handle',
                key: 'handle-' + String(idx),
                onClick: _this8.killEvent,
                onKeyDown: !disabled ? _this8.handleKeydown : undefined,
                onMouseDown: !disabled ? _this8.startMouseSlide : undefined,
                onTouchStart: !disabled ? _this8.startTouchSlide : undefined,
                role: 'slider',
                style: handleStyle,
                tabIndex: 0
              });
            }),
            handlePos.map(function (node, idx, arr) {
              if (idx === 0 && arr.length > 1) {
                return null;
              }

              return _react2['default'].createElement(ProgressBar, {
                className: 'rheostat-progress',
                key: 'progress-bar-' + String(idx),
                style: _this8.getProgressStyle(idx)
              });
            }),
            PitComponent && pitPoints.map(function (n) {
              var pitStyle = _this8.pitStyleCache[n];

              if (!pitStyle) {
                var pos = algorithm.getPosition(n, min, max);
                pitStyle = orientation === 'vertical' ? { top: String(pos) + '%', position: 'absolute' } : { left: String(pos) + '%', position: 'absolute' };
                _this8.pitStyleCache[n] = pitStyle;
              }

              return _react2['default'].createElement(
                PitComponent,
                { key: 'pit-' + String(n), style: pitStyle },
                n
              );
            }),
            children
          )
        );
      }

      return render;
    }()
  }]);

  return Rheostat;
}(_react2['default'].Component);

Rheostat.propTypes = propTypes;
Rheostat.defaultProps = defaultProps;

exports['default'] = Rheostat;

/***/ }),

/***/ "./node_modules/rheostat/lib/algorithms/linear.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  getPosition: function () {
    function getPosition(value, min, max) {
      return (value - min) / (max - min) * 100;
    }

    return getPosition;
  }(),
  getValue: function () {
    function getValue(pos, min, max) {
      var decimal = pos / 100;

      if (pos === 0) {
        return min;
      } else if (pos === 100) {
        return max;
      }

      return Math.round((max - min) * decimal + min);
    }

    return getValue;
  }()
};

/***/ }),

/***/ "./node_modules/rheostat/lib/constants/SliderConstants.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var KEYS = exports.KEYS = {
  DOWN: 40,
  END: 35,
  ESC: 27,
  HOME: 36,
  LEFT: 37,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  RIGHT: 39,
  UP: 38
};
var PERCENT_EMPTY = exports.PERCENT_EMPTY = 0;
var PERCENT_FULL = exports.PERCENT_FULL = 100;

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		typeof define === 'function' && define['amd'] ? define(factory()) :
			(window['stylisRuleSheet'] = factory())
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__("./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/url-parser-lite/index.js":
/***/ (function(module, exports) {

function URL(url) {
    var pattern = RegExp("^(([^:/?#]*)?://)?(((.*)?@)?([^/?#]*)?)([^?#]*)(\\?([^#]*))?(#(.*))?");
    var matches = url.match(pattern);

    return {
        protocol: matches[2],
        auth: matches[5],
        host: matches[6],
        path: matches[7],
        query: matches[9],
        hash: matches[11]
    };
}

module.exports = URL;


/***/ }),

/***/ "./node_modules/url-search-params/build/url-search-params.node.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/


function URLSearchParams(query) {
  var
    index, key, value,
    pairs, i, length,
    dict = Object.create(null)
  ;
  this[secret] = dict;
  if (!query) return;
  if (typeof query === 'string') {
    if (query.charAt(0) === '?') {
      query = query.slice(1);
    }
    for (
      pairs = query.split('&'),
      i = 0,
      length = pairs.length; i < length; i++
    ) {
      value = pairs[i];
      index = value.indexOf('=');
      if (-1 < index) {
        appendTo(
          dict,
          decode(value.slice(0, index)),
          decode(value.slice(index + 1))
        );
      } else if (value.length){
        appendTo(
          dict,
          decode(value),
          ''
        );
      }
    }
  } else {
    if (isArray(query)) {
      for (
        i = 0,
        length = query.length; i < length; i++
      ) {
        value = query[i];
        appendTo(dict, value[0], value[1]);
      }
    } else {
      for (key in query) {
         appendTo(dict, key, query[key]);
      }
    }
  }
}

var
  isArray = Array.isArray,
  URLSearchParamsProto = URLSearchParams.prototype,
  find = /[!'\(\)~]|%20|%00/g,
  plus = /\+/g,
  replace = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  },
  replacer = function (match) {
    return replace[match];
  },
  secret = '__URLSearchParams__:' + Math.random()
;

function appendTo(dict, name, value) {
  if (name in dict) {
    dict[name].push('' + value);
  } else {
    dict[name] = isArray(value) ? value : ['' + value];
  }
}

function decode(str) {
  return decodeURIComponent(str.replace(plus, ' '));
}

function encode(str) {
  return encodeURIComponent(str).replace(find, replacer);
}

URLSearchParamsProto.append = function append(name, value) {
  appendTo(this[secret], name, value);
};

URLSearchParamsProto.delete = function del(name) {
  delete this[secret][name];
};

URLSearchParamsProto.get = function get(name) {
  var dict = this[secret];
  return name in dict ? dict[name][0] : null;
};

URLSearchParamsProto.getAll = function getAll(name) {
  var dict = this[secret];
  return name in dict ? dict[name].slice(0) : [];
};

URLSearchParamsProto.has = function has(name) {
  return name in this[secret];
};

URLSearchParamsProto.set = function set(name, value) {
  this[secret][name] = ['' + value];
};

URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
  var dict = this[secret];
  Object.getOwnPropertyNames(dict).forEach(function(name) {
    dict[name].forEach(function(value) {
      callback.call(thisArg, value, name, this);
    }, this);
  }, this);
};

/*
URLSearchParamsProto.toBody = function() {
  return new Blob(
    [this.toString()],
    {type: 'application/x-www-form-urlencoded'}
  );
};
*/

URLSearchParamsProto.toJSON = function toJSON() {
  return {};
};

URLSearchParamsProto.toString = function toString() {
  var dict = this[secret], query = [], i, key, name, value;
  for (key in dict) {
    name = encode(key);
    for (
      i = 0,
      value = dict[key];
      i < value.length; i++
    ) {
      query.push(name + '=' + encode(value[i]));
    }
  }
  return query.join('&');
};

URLSearchParams = (module.exports = global.URLSearchParams || URLSearchParams);

(function (URLSearchParamsProto) {

  var iterable = (function () {
    try {
      return !!Symbol.iterator;
    } catch(error) {
      return false;
    }
  }());

  // mostly related to issue #24
  if (!('forEach' in URLSearchParamsProto)) {
    URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
      var names = Object.create(null);
      this.toString()
          .replace(/=[\s\S]*?(?:&|$)/g, '=')
          .split('=')
          .forEach(function (name) {
            if (!name.length || name in names) return;
            (names[name] = this.getAll(name)).forEach(function(value) {
              callback.call(thisArg, value, name, this);
            }, this);
          }, this);
    };
  }

  if (!('keys' in URLSearchParamsProto)) {
    URLSearchParamsProto.keys = function keys() {
      var items = [];
      this.forEach(function(value, name) { items.push(name); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (!('values' in URLSearchParamsProto)) {
    URLSearchParamsProto.values = function values() {
      var items = [];
      this.forEach(function(value) { items.push(value); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (!('entries' in URLSearchParamsProto)) {
    URLSearchParamsProto.entries = function entries() {
      var items = [];
      this.forEach(function(value, name) { items.push([name, value]); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (iterable && !(Symbol.iterator in URLSearchParamsProto)) {
    URLSearchParamsProto[Symbol.iterator] = URLSearchParamsProto.entries;
  }

  if (!('sort' in URLSearchParamsProto)) {
    URLSearchParamsProto.sort = function sort() {
      var
        entries = this.entries(),
        entry = entries.next(),
        done = entry.done,
        keys = [],
        values = Object.create(null),
        i, key, value
      ;
      while (!done) {
        value = entry.value;
        key = value[0];
        keys.push(key);
        if (!(key in values)) {
          values[key] = [];
        }
        values[key].push(value[1]);
        entry = entries.next();
        done = entry.done;
      }
      // not the champion in efficiency
      // but these two bits just do the job
      keys.sort();
      for (i = 0; i < keys.length; i++) {
        this.delete(keys[i]);
      }
      for (i = 0; i < keys.length; i++) {
        key = keys[i];
        this.append(key, values[key].shift());
      }
    };
  }

}(URLSearchParams.prototype));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/xdate/src/xdate.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve XDate v@VERSION
 * Docs & Licensing: http://arshaw.com/xdate/
 */

/*
 * Internal Architecture
 * ---------------------
 * An XDate wraps a native Date. The native Date is stored in the '0' property of the object.
 * UTC-mode is determined by whether the internal native Date's toString method is set to
 * Date.prototype.toUTCString (see getUTCMode).
 *
 */

var XDate = (function(Date, Math, Array, undefined) {


/** @const */ var FULLYEAR     = 0;
/** @const */ var MONTH        = 1;
/** @const */ var DATE         = 2;
/** @const */ var HOURS        = 3;
/** @const */ var MINUTES      = 4;
/** @const */ var SECONDS      = 5;
/** @const */ var MILLISECONDS = 6;
/** @const */ var DAY          = 7;
/** @const */ var YEAR         = 8;
/** @const */ var WEEK         = 9;
/** @const */ var DAY_MS = 86400000;
var ISO_FORMAT_STRING = "yyyy-MM-dd'T'HH:mm:ss(.fff)";
var ISO_FORMAT_STRING_TZ = ISO_FORMAT_STRING + "zzz";


var methodSubjects = [
	'FullYear',     // 0
	'Month',        // 1
	'Date',         // 2
	'Hours',        // 3
	'Minutes',      // 4
	'Seconds',      // 5
	'Milliseconds', // 6
	'Day',          // 7
	'Year'          // 8
];
var subjectPlurals = [
	'Years',        // 0
	'Months',       // 1
	'Days'          // 2
];
var unitsWithin = [
	12,   // months in year
	31,   // days in month (sort of)
	24,   // hours in day
	60,   // minutes in hour
	60,   // seconds in minute
	1000, // milliseconds in second
	1     //
];
var formatStringRE = new RegExp(
	"(([a-zA-Z])\\2*)|" + // 1, 2
	"(\\(" + "(('.*?'|\\(.*?\\)|.)*?)" + "\\))|" + // 3, 4, 5 (allows for 1 level of inner quotes or parens)
	"('(.*?)')" // 6, 7
);
var UTC = Date.UTC;
var toUTCString = Date.prototype.toUTCString;
var proto = XDate.prototype;



// This makes an XDate look pretty in Firebug and Web Inspector.
// It makes an XDate seem array-like, and displays [ <internal-date>.toString() ]
proto.length = 1;
proto.splice = Array.prototype.splice;




/* Constructor
---------------------------------------------------------------------------------*/

// TODO: in future, I'd change signature for the constructor regarding the `true` utc-mode param. ~ashaw
//   I'd move the boolean to be the *first* argument. Still optional. Seems cleaner.
//   I'd remove it from the `xdate`, `nativeDate`, and `milliseconds` constructors.
//      (because you can simply call .setUTCMode(true) after)
//   And I'd only leave it for the y/m/d/h/m/s/m and `dateString` constructors
//      (because those are the only constructors that need it for DST-gap data-loss reasons)
//   Should do this for 1.0

function XDate() {
	return init(
		(this instanceof XDate) ? this : new XDate(),
		arguments
	);
}


function init(xdate, args) {
	var len = args.length;
	var utcMode;
	if (isBoolean(args[len-1])) {
		utcMode = args[--len];
		args = slice(args, 0, len);
	}
	if (!len) {
		xdate[0] = new Date();
	}
	else if (len == 1) {
		var arg = args[0];
		if (arg instanceof Date) {
			xdate[0] = new Date(arg.getTime());
		}
		else if (isNumber(arg)) {
			xdate[0] = new Date(arg);
		}
		else if (arg instanceof XDate) {
			xdate[0] = _clone(arg);
		}
		else if (isString(arg)) {
			xdate[0] = new Date(0);
			xdate = parse(arg, utcMode || false, xdate);
		}
	}
	else {
		xdate[0] = new Date(UTC.apply(Date, args));
		if (!utcMode) {
			xdate[0] = coerceToLocal(xdate[0]);
		}
	}
	if (isBoolean(utcMode)) {
		setUTCMode(xdate, utcMode);
	}
	return xdate;
}



/* UTC Mode Methods
---------------------------------------------------------------------------------*/


proto.getUTCMode = methodize(getUTCMode);
function getUTCMode(xdate) {
	return xdate[0].toString === toUTCString;
};


proto.setUTCMode = methodize(setUTCMode);
function setUTCMode(xdate, utcMode, doCoercion) {
	if (utcMode) {
		if (!getUTCMode(xdate)) {
			if (doCoercion) {
				xdate[0] = coerceToUTC(xdate[0]);
			}
			xdate[0].toString = toUTCString;
		}
	}else{
		if (getUTCMode(xdate)) {
			if (doCoercion) {
				xdate[0] = coerceToLocal(xdate[0]);
			}else{
				xdate[0] = new Date(xdate[0].getTime());
			}
			// toString will have been cleared
		}
	}
	return xdate; // for chaining
}


proto.getTimezoneOffset = function() {
	if (getUTCMode(this)) {
		return 0;
	}else{
		return this[0].getTimezoneOffset();
	}
};



/* get / set / add / diff Methods (except for week-related)
---------------------------------------------------------------------------------*/


each(methodSubjects, function(subject, fieldIndex) {

	proto['get' + subject] = function() {
		return _getField(this[0], getUTCMode(this), fieldIndex);
	};

	if (fieldIndex != YEAR) { // because there is no getUTCYear

		proto['getUTC' + subject] = function() {
			return _getField(this[0], true, fieldIndex);
		};

	}

	if (fieldIndex != DAY) { // because there is no setDay or setUTCDay
	                         // and the add* and diff* methods use DATE instead

		proto['set' + subject] = function(value) {
			_set(this, fieldIndex, value, arguments, getUTCMode(this));
			return this; // for chaining
		};

		if (fieldIndex != YEAR) { // because there is no setUTCYear
		                          // and the add* and diff* methods use FULLYEAR instead

			proto['setUTC' + subject] = function(value) {
				_set(this, fieldIndex, value, arguments, true);
				return this; // for chaining
			};

			proto['add' + (subjectPlurals[fieldIndex] || subject)] = function(delta, preventOverflow) {
				_add(this, fieldIndex, delta, preventOverflow);
				return this; // for chaining
			};

			proto['diff' + (subjectPlurals[fieldIndex] || subject)] = function(otherDate) {
				return _diff(this, otherDate, fieldIndex);
			};

		}

	}

});


function _set(xdate, fieldIndex, value, args, useUTC) {
	var getField = curry(_getField, xdate[0], useUTC);
	var setField = curry(_setField, xdate[0], useUTC);
	var expectedMonth;
	var preventOverflow = false;
	if (args.length == 2 && isBoolean(args[1])) {
		preventOverflow = args[1];
		args = [ value ];
	}
	if (fieldIndex == MONTH) {
		expectedMonth = (value % 12 + 12) % 12;
	}else{
		expectedMonth = getField(MONTH);
	}
	setField(fieldIndex, args);
	if (preventOverflow && getField(MONTH) != expectedMonth) {
		setField(MONTH, [ getField(MONTH) - 1 ]);
		setField(DATE, [ getDaysInMonth(getField(FULLYEAR), getField(MONTH)) ]);
	}
}


function _add(xdate, fieldIndex, delta, preventOverflow) {
	delta = Number(delta);
	var intDelta = Math.floor(delta);
	xdate['set' + methodSubjects[fieldIndex]](
		xdate['get' + methodSubjects[fieldIndex]]() + intDelta,
		preventOverflow || false
	);
	if (intDelta != delta && fieldIndex < MILLISECONDS) {
		_add(xdate, fieldIndex+1, (delta-intDelta)*unitsWithin[fieldIndex], preventOverflow);
	}
}


function _diff(xdate1, xdate2, fieldIndex) { // fieldIndex=FULLYEAR is for years, fieldIndex=DATE is for days
	xdate1 = xdate1.clone().setUTCMode(true, true);
	xdate2 = XDate(xdate2).setUTCMode(true, true);
	var v = 0;
	if (fieldIndex == FULLYEAR || fieldIndex == MONTH) {
		for (var i=MILLISECONDS, methodName; i>=fieldIndex; i--) {
			v /= unitsWithin[i];
			v += _getField(xdate2, false, i) - _getField(xdate1, false, i);
		}
		if (fieldIndex == MONTH) {
			v += (xdate2.getFullYear() - xdate1.getFullYear()) * 12;
		}
	}
	else if (fieldIndex == DATE) {
		var clear1 = xdate1.toDate().setUTCHours(0, 0, 0, 0); // returns an ms value
		var clear2 = xdate2.toDate().setUTCHours(0, 0, 0, 0); // returns an ms value
		v = Math.round((clear2 - clear1) / DAY_MS) + ((xdate2 - clear2) - (xdate1 - clear1)) / DAY_MS;
	}
	else {
		v = (xdate2 - xdate1) / [
			3600000, // milliseconds in hour
			60000,   // milliseconds in minute
			1000,    // milliseconds in second
			1        //
			][fieldIndex - 3];
	}
	return v;
}



/* Week Methods
---------------------------------------------------------------------------------*/


proto.getWeek = function() {
	return _getWeek(curry(_getField, this, false));
};


proto.getUTCWeek = function() {
	return _getWeek(curry(_getField, this, true));
};


proto.setWeek = function(n, year) {
	_setWeek(this, n, year, false);
	return this; // for chaining
};


proto.setUTCWeek = function(n, year) {
	_setWeek(this, n, year, true);
	return this; // for chaining
};


proto.addWeeks = function(delta) {
	return this.addDays(Number(delta) * 7);
};


proto.diffWeeks = function(otherDate) {
	return _diff(this, otherDate, DATE) / 7;
};


function _getWeek(getField) {
	return getWeek(getField(FULLYEAR), getField(MONTH), getField(DATE));
}


function getWeek(year, month, date) {
	var d = new Date(UTC(year, month, date));
	var week1 = getWeek1(
		getWeekYear(year, month, date)
	);
	return Math.floor(Math.round((d - week1) / DAY_MS) / 7) + 1;
}


function getWeekYear(year, month, date) { // get the year that the date's week # belongs to
	var d = new Date(UTC(year, month, date));
	if (d < getWeek1(year)) {
		return year - 1;
	}
	else if (d >= getWeek1(year + 1)) {
		return year + 1;
	}
	return year;
}


function getWeek1(year) { // returns Date of first week of year, in UTC
	var d = new Date(UTC(year, 0, 4));
	d.setUTCDate(d.getUTCDate() - (d.getUTCDay() + 6) % 7); // make it Monday of the week
	return d;
}


function _setWeek(xdate, n, year, useUTC) {
	var getField = curry(_getField, xdate, useUTC);
	var setField = curry(_setField, xdate, useUTC);

	if (year === undefined) {
		year = getWeekYear(
			getField(FULLYEAR),
			getField(MONTH),
			getField(DATE)
		);
	}

	var week1 = getWeek1(year);
	if (!useUTC) {
		week1 = coerceToLocal(week1);
	}

	xdate.setTime(week1.getTime());
	setField(DATE, [ getField(DATE) + (n-1) * 7 ]); // would have used xdate.addUTCWeeks :(
		// n-1 because n is 1-based
}



/* Parsing
---------------------------------------------------------------------------------*/


XDate.parsers = [
	parseISO
];


XDate.parse = function(str) {
	return +XDate(''+str);
};


function parse(str, utcMode, xdate) {
	var parsers = XDate.parsers;
	var i = 0;
	var res;
	for (; i<parsers.length; i++) {
		res = parsers[i](str, utcMode, xdate);
		if (res) {
			return res;
		}
	}
	xdate[0] = new Date(str);
	return xdate;
}


function parseISO(str, utcMode, xdate) {
	var m = str.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/);
	if (m) {
		var d = new Date(UTC(
			m[1],
			m[3] ? m[3] - 1 : 0,
			m[5] || 1,
			m[7] || 0,
			m[8] || 0,
			m[10] || 0,
			m[12] ? Number('0.' + m[12]) * 1000 : 0
		));
		if (m[13]) { // has gmt offset or Z
			if (m[14]) { // has gmt offset
				d.setUTCMinutes(
					d.getUTCMinutes() +
					(m[15] == '-' ? 1 : -1) * (Number(m[16]) * 60 + (m[18] ? Number(m[18]) : 0))
				);
			}
		}else{ // no specified timezone
			if (!utcMode) {
				d = coerceToLocal(d);
			}
		}
		return xdate.setTime(d.getTime());
	}
}



/* Formatting
---------------------------------------------------------------------------------*/


proto.toString = function(formatString, settings, uniqueness) {
	if (formatString === undefined || !valid(this)) {
		return this[0].toString(); // already accounts for utc-mode (might be toUTCString)
	}else{
		return format(this, formatString, settings, uniqueness, getUTCMode(this));
	}
};


proto.toUTCString = proto.toGMTString = function(formatString, settings, uniqueness) {
	if (formatString === undefined || !valid(this)) {
		return this[0].toUTCString();
	}else{
		return format(this, formatString, settings, uniqueness, true);
	}
};


proto.toISOString = function() {
	return this.toUTCString(ISO_FORMAT_STRING_TZ);
};


XDate.defaultLocale = '';
XDate.locales = {
	'': {
		monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		amDesignator: 'AM',
		pmDesignator: 'PM'
	}
};
XDate.formatters = {
	i: ISO_FORMAT_STRING,
	u: ISO_FORMAT_STRING_TZ
};


function format(xdate, formatString, settings, uniqueness, useUTC) {

	var locales = XDate.locales;
	var defaultLocaleSettings = locales[XDate.defaultLocale] || {};
	var getField = curry(_getField, xdate, useUTC);

	settings = (isString(settings) ? locales[settings] : settings) || {};

	function getSetting(name) {
		return settings[name] || defaultLocaleSettings[name];
	}

	function getFieldAndTrace(fieldIndex) {
		if (uniqueness) {
			var i = (fieldIndex == DAY ? DATE : fieldIndex) - 1;
			for (; i>=0; i--) {
				uniqueness.push(getField(i));
			}
		}
		return getField(fieldIndex);
	}

	return _format(xdate, formatString, getFieldAndTrace, getSetting, useUTC);
}


function _format(xdate, formatString, getField, getSetting, useUTC) {
	var m;
	var subout;
	var out = '';
	while (m = formatString.match(formatStringRE)) {
		out += formatString.substr(0, m.index);
		if (m[1]) { // consecutive alphabetic characters
			out += processTokenString(xdate, m[1], getField, getSetting, useUTC);
		}
		else if (m[3]) { // parenthesis
			subout = _format(xdate, m[4], getField, getSetting, useUTC);
			if (parseInt(subout.replace(/\D/g, ''), 10)) { // if any of the numbers are non-zero. or no numbers at all
				out += subout;
			}
		}
		else { // else if (m[6]) { // single quotes
			out += m[7] || "'"; // if inner is blank, meaning 2 consecutive quotes = literal single quote
		}
		formatString = formatString.substr(m.index + m[0].length);
	}
	return out + formatString;
}


function processTokenString(xdate, tokenString, getField, getSetting, useUTC) {
	var end = tokenString.length;
	var replacement;
	var out = '';
	while (end > 0) {
		replacement = getTokenReplacement(xdate, tokenString.substr(0, end), getField, getSetting, useUTC);
		if (replacement !== undefined) {
			out += replacement;
			tokenString = tokenString.substr(end);
			end = tokenString.length;
		}else{
			end--;
		}
	}
	return out + tokenString;
}


function getTokenReplacement(xdate, token, getField, getSetting, useUTC) {
	var formatter = XDate.formatters[token];
	if (isString(formatter)) {
		return _format(xdate, formatter, getField, getSetting, useUTC);
	}
	else if (isFunction(formatter)) {
		return formatter(xdate, useUTC || false, getSetting);
	}
	switch (token) {
		case 'fff'  : return zeroPad(getField(MILLISECONDS), 3);
		case 's'    : return getField(SECONDS);
		case 'ss'   : return zeroPad(getField(SECONDS));
		case 'm'    : return getField(MINUTES);
		case 'mm'   : return zeroPad(getField(MINUTES));
		case 'h'    : return getField(HOURS) % 12 || 12;
		case 'hh'   : return zeroPad(getField(HOURS) % 12 || 12);
		case 'H'    : return getField(HOURS);
		case 'HH'   : return zeroPad(getField(HOURS));
		case 'd'    : return getField(DATE);
		case 'dd'   : return zeroPad(getField(DATE));
		case 'ddd'  : return getSetting('dayNamesShort')[getField(DAY)] || '';
		case 'dddd' : return getSetting('dayNames')[getField(DAY)] || '';
		case 'M'    : return getField(MONTH) + 1;
		case 'MM'   : return zeroPad(getField(MONTH) + 1);
		case 'MMM'  : return getSetting('monthNamesShort')[getField(MONTH)] || '';
		case 'MMMM' : return getSetting('monthNames')[getField(MONTH)] || '';
		case 'yy'   : return (getField(FULLYEAR)+'').substring(2);
		case 'yyyy' : return getField(FULLYEAR);
		case 't'    : return _getDesignator(getField, getSetting).substr(0, 1).toLowerCase();
		case 'tt'   : return _getDesignator(getField, getSetting).toLowerCase();
		case 'T'    : return _getDesignator(getField, getSetting).substr(0, 1);
		case 'TT'   : return _getDesignator(getField, getSetting);
		case 'z'    :
		case 'zz'   :
		case 'zzz'  : return useUTC ? 'Z' : _getTZString(xdate, token);
		case 'w'    : return _getWeek(getField);
		case 'ww'   : return zeroPad(_getWeek(getField));
		case 'S'    :
			var d = getField(DATE);
			if (d > 10 && d < 20) return 'th';
			return ['st', 'nd', 'rd'][d % 10 - 1] || 'th';
	}
}


function _getTZString(xdate, token) {
	var tzo = xdate.getTimezoneOffset();
	var sign = tzo < 0 ? '+' : '-';
	var hours = Math.floor(Math.abs(tzo) / 60);
	var minutes = Math.abs(tzo) % 60;
	var out = hours;
	if (token == 'zz') {
		out = zeroPad(hours);
	}
	else if (token == 'zzz') {
		out = zeroPad(hours) + ':' + zeroPad(minutes);
	}
	return sign + out;
}


function _getDesignator(getField, getSetting) {
	return getField(HOURS) < 12 ? getSetting('amDesignator') : getSetting('pmDesignator');
}



/* Misc Methods
---------------------------------------------------------------------------------*/


each(
	[ // other getters
		'getTime',
		'valueOf',
		'toDateString',
		'toTimeString',
		'toLocaleString',
		'toLocaleDateString',
		'toLocaleTimeString',
		'toJSON'
	],
	function(methodName) {
		proto[methodName] = function() {
			return this[0][methodName]();
		};
	}
);


proto.setTime = function(t) {
	this[0].setTime(t);
	return this; // for chaining
};


proto.valid = methodize(valid);
function valid(xdate) {
	return !isNaN(xdate[0].getTime());
}


proto.clone = function() {
	return new XDate(this);
};


proto.clearTime = function() {
	return this.setHours(0, 0, 0, 0); // will return an XDate for chaining
};


proto.toDate = function() {
	return new Date(this[0].getTime());
};



/* Misc Class Methods
---------------------------------------------------------------------------------*/


XDate.now = function() {
	return (new Date()).getTime();
};


XDate.today = function() {
	return new XDate().clearTime();
};


XDate.UTC = UTC;


XDate.getDaysInMonth = getDaysInMonth;



/* Internal Utilities
---------------------------------------------------------------------------------*/


function _clone(xdate) { // returns the internal Date object that should be used
	var d = new Date(xdate[0].getTime());
	if (getUTCMode(xdate)) {
		d.toString = toUTCString;
	}
	return d;
}


function _getField(d, useUTC, fieldIndex) {
	return d['get' + (useUTC ? 'UTC' : '') + methodSubjects[fieldIndex]]();
}


function _setField(d, useUTC, fieldIndex, args) {
	d['set' + (useUTC ? 'UTC' : '') + methodSubjects[fieldIndex]].apply(d, args);
}



/* Date Math Utilities
---------------------------------------------------------------------------------*/


function coerceToUTC(date) {
	return new Date(UTC(
		date.getFullYear(),
		date.getMonth(),
		date.getDate(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
		date.getMilliseconds()
	));
}


function coerceToLocal(date) {
	return new Date(
		date.getUTCFullYear(),
		date.getUTCMonth(),
		date.getUTCDate(),
		date.getUTCHours(),
		date.getUTCMinutes(),
		date.getUTCSeconds(),
		date.getUTCMilliseconds()
	);
}


function getDaysInMonth(year, month) {
	return 32 - new Date(UTC(year, month, 32)).getUTCDate();
}



/* General Utilities
---------------------------------------------------------------------------------*/


function methodize(f) {
	return function() {
		return f.apply(undefined, [this].concat(slice(arguments)));
	};
}


function curry(f) {
	var firstArgs = slice(arguments, 1);
	return function() {
		return f.apply(undefined, firstArgs.concat(slice(arguments)));
	};
}


function slice(a, start, end) {
	return Array.prototype.slice.call(
		a,
		start || 0, // start and end cannot be undefined for IE
		end===undefined ? a.length : end
	);
}


function each(a, f) {
	for (var i=0; i<a.length; i++) {
		f(a[i], i);
	};
}


function isString(arg) {
	return typeof arg == 'string';
}


function isNumber(arg) {
	return typeof arg == 'number';
}


function isBoolean(arg) {
	return typeof arg == 'boolean';
}


function isFunction(arg) {
	return typeof arg == 'function';
}


function zeroPad(n, len) {
	len = len || 2;
	n += '';
	while (n.length < len) {
		n = '0' + n;
	}
	return n;
}



// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
	module.exports = XDate;
}

// AMD
if (true) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return XDate;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


return XDate;

})(Date, Math, Array);


/***/ }),

/***/ "./pages/Leftbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_list_MultiDataList__ = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/list/MultiDataList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_list_MultiDataList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_list_MultiDataList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_range_RangeSlider__ = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/range/RangeSlider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_range_RangeSlider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_range_RangeSlider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_date_DateRange__ = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/date/DateRange.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_date_DateRange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_date_DateRange__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_list_MultiList__ = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/list/MultiList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_list_MultiList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_list_MultiList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_range_SingleRange__ = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/range/SingleRange.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_range_SingleRange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_range_SingleRange__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/jimmydang/Projects/MovieSearch/pages/Leftbar.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var components = {
  multiList: {
    componentId: "genres-list",
    dataField: "genres_data.raw",
    className: "genres-filter",
    size: 20,
    sortBy: "asc",
    queryFormat: "or",
    selectAllLabel: "All Genres",
    showCheckbox: true,
    showCount: true,
    showSearch: true,
    placeholder: "Search for a Genre",
    react: {
      and: ["mainSearch", "results", "date-filter", "RangeSlider", "language-list", "revenue-list"]
    },
    showFilter: true,
    filterLabel: "Genre",
    URLParams: false,
    innerClass: {
      label: "list-item",
      input: "list-input"
    }
  },
  rangeSlider: {
    componentId: "RangeSlider",
    dataField: "vote_average",
    className: "review-filter",
    range: {
      start: 0,
      end: 10
    },
    rangeLabels: {
      start: "0",
      end: "10"
    },
    react: {
      and: ["mainSearch", "results", "language-list", "date-Filter", "genres-list", "revenue-list"]
    }
  },
  dateRange: {
    componentId: "date-filter",
    dataField: "release_date",
    className: "datePicker"
  },
  multiDataList: {
    componentId: "language-list",
    dataField: "original_language.raw",
    className: "language-filter",
    size: 100,
    sortBy: "asc",
    queryFormat: "or",
    selectAllLabel: "All Languages",
    showCheckbox: true,
    showSearch: true,
    placeholder: "Search for a language",
    react: {
      and: ["mainSearch", "results", "date-filter", "RangeSlider", "genres-list", "revenue-list"]
    },
    data: [{
      label: "English",
      value: "English"
    }, {
      label: "Chinese",
      value: "Chinese"
    }, {
      label: "Turkish",
      value: "Turkish"
    }, {
      label: "Swedish",
      value: "Swedish"
    }, {
      label: "Russian",
      value: "Russian"
    }, {
      label: "Portuguese",
      value: "Portuguese"
    }, {
      label: "Korean",
      value: "Korean"
    }, {
      label: "Japanese",
      value: "Japanese"
    }, {
      label: "Italian",
      value: "Italian"
    }, {
      label: "Hindi",
      value: "Hindi"
    }, {
      label: "French",
      value: "French"
    }, {
      label: "Finnish",
      value: "Finnish"
    }, {
      label: "Spanish",
      value: "Spanish"
    }, {
      label: "Deutsch",
      value: "Deutsch"
    }],
    showFilter: true,
    filterLabel: "Language",
    URLParams: false,
    innerClass: {
      label: "list-item",
      input: "list-input"
    }
  },
  singleRange: {
    componentId: "revenue-list",
    dataField: "ran_revenue",
    className: "revenue-filter",
    data: [{ start: 0, end: 1000, label: "< 1M" }, { start: 1000, end: 10000, label: "1M-10M" }, { start: 10000, end: 500000, label: "10M-500M" }, { start: 500000, end: 1000000, label: "500M-1B" }, { start: 1000000, end: 10000000, label: "> 1B" }],
    showRadio: true,
    showFilter: true,
    filterLabel: "Revenue",
    URLParams: false,
    innerClass: {
      label: "revenue-label",
      radio: "revenue-radio"
    }
  }
};

var Leftbar = function (_Component) {
  _inherits(Leftbar, _Component);

  function Leftbar() {
    _classCallCheck(this, Leftbar);

    return _possibleConstructorReturn(this, (Leftbar.__proto__ || Object.getPrototypeOf(Leftbar)).apply(this, arguments));
  }

  _createClass(Leftbar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { className: this.props.isClicked ? "left-bar-optional" : "left-bar", __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "filter-heading center", __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "b",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 216
              }
            },
            " ",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-pied-piper-alt", __source: {
                fileName: _jsxFileName,
                lineNumber: 218
              }
            }),
            " Genres",
            " "
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_list_MultiList___default.a, _extends({}, components.multiList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          }
        })),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", { className: "blue", __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "filter-heading center", __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "b",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 226
              }
            },
            " ",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-dollar", __source: {
                fileName: _jsxFileName,
                lineNumber: 228
              }
            }),
            " Revenue",
            " "
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_range_SingleRange___default.a, _extends({}, components.singleRange, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          }
        })),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", { className: "blue", __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "filter-heading center", __source: {
              fileName: _jsxFileName,
              lineNumber: 235
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "b",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 236
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-star", __source: {
                fileName: _jsxFileName,
                lineNumber: 237
              }
            }),
            " Ratings"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_range_RangeSlider___default.a, _extends({}, components.rangeSlider, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        })),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", { className: "blue", __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "filter-heading center", __source: {
              fileName: _jsxFileName,
              lineNumber: 244
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "b",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 245
              }
            },
            " ",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-language", __source: {
                fileName: _jsxFileName,
                lineNumber: 247
              }
            }),
            " Languages",
            " "
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_list_MultiDataList___default.a, _extends({}, components.multiDataList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          }
        })),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", { className: "blue", __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "filter-heading center", __source: {
              fileName: _jsxFileName,
              lineNumber: 255
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "b",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 256
              }
            },
            " ",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-calendar", __source: {
                fileName: _jsxFileName,
                lineNumber: 258
              }
            }),
            " Release Date",
            " "
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_date_DateRange___default.a, _extends({}, components.dateRange, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }))
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return initReactivesearch([_extends({}, components.multiList, {
                  type: "MultiList",
                  source: __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_list_MultiList___default.a
                }), _extends({}, components.multiDataList, {
                  type: "MultiDataList",
                  source: __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_list_MultiDataList___default.a
                }), _extends({}, components.dateRange, {
                  type: "DateRange",
                  source: __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_date_DateRange___default.a
                }), _extends({}, components.rangeSlider, {
                  type: "RangeSlider",
                  source: __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_range_RangeSlider___default.a
                }), _extends({}, components.singleRange, {
                  type: "SingleRange",
                  source: __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_range_SingleRange___default.a
                })], null);

              case 2:
                _context.t0 = _context.sent;
                return _context.abrupt("return", {
                  store: _context.t0
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Leftbar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Leftbar;

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(components, "components", "/Users/jimmydang/Projects/MovieSearch/pages/Leftbar.js");
  reactHotLoader.register(Leftbar, "Leftbar", "/Users/jimmydang/Projects/MovieSearch/pages/Leftbar.js");
  reactHotLoader.register(_default, "default", "/Users/jimmydang/Projects/MovieSearch/pages/Leftbar.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Leftbar")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch__ = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/search/DataSearch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/jimmydang/Projects/MovieSearch/pages/Navbar.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var components = {
  dataSearch: {
    componentId: "mainSearch",
    dataField: "original_title.search",
    categoryField: "title",
    className: "search-bar",
    queryFormat: "and",
    placeholder: "Search for movies...",
    iconPosition: "left",
    autosuggest: false,
    filterLabel: "search",
    highlight: true
  }
};

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { className: "navbar", __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "logo-container", __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { className: "app-logo", src: "/static/logo.jpg", alt: "MovieSearch", __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "search-container", __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch___default.a, _extends({}, components.dataSearch, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }))
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return initReactivesearch([_extends({}, components.datasearch, {
                  type: "DataSearch",
                  source: __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch___default.a
                })], null);

              case 2:
                _context.t0 = _context.sent;
                return _context.abrupt("return", {
                  store: _context.t0
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Navbar;

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(components, "components", "/Users/jimmydang/Projects/MovieSearch/pages/Navbar.js");
  reactHotLoader.register(Navbar, "Navbar", "/Users/jimmydang/Projects/MovieSearch/pages/Navbar.js");
  reactHotLoader.register(_default, "default", "/Users/jimmydang/Projects/MovieSearch/pages/Navbar.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Navbar")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase__ = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/basic/ReactiveBase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_SelectedFilters__ = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/basic/SelectedFilters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_SelectedFilters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_SelectedFilters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_result_ResultCard__ = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/components/result/ResultCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_result_ResultCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_result_ResultCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Navbar_js__ = __webpack_require__("./pages/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Leftbar_js__ = __webpack_require__("./pages/Leftbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_server__ = __webpack_require__("./node_modules/@appbaseio/reactivesearch/lib/server/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_css__ = __webpack_require__("./pages/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__index_css__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "/Users/jimmydang/Projects/MovieSearch/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var components = {
  settings: {
    app: "MovieAppFinal",
    credentials: "RxIAbH9Jc:6d3a5016-5e9d-448f-bd2b-63c80b401484",
    theme: {
      typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
        fontSize: "16px"
      },
      colors: {
        textColor: "#fff",
        backgroundColor: "#212121",
        primaryTextColor: "#fff",
        primaryColor: "#2196F3",
        titleColor: "#fff",
        alertColor: "#d9534f",
        borderColor: "#666"
      }
    }
  },
  selectedFilters: {
    showClearAll: true,
    clearAllLabel: "Clear filters"
  },
  resultCard: {
    componentId: "results",
    dataField: "original_title.search",
    react: {
      and: ["mainSearch", "RangeSlider", "language-list", "date-filter", "genres-list", "revenue-list"]
    },
    pagination: true,
    className: "Result_card",
    paginationAt: "bottom",
    pages: 5,
    size: 12,
    Loader: "Loading...",
    noResults: "No results found...",
    sortOptions: [{
      dataField: "revenue",
      sortBy: "desc",
      label: "Sort by Revenue(High to Low) \xA0"
    }, {
      dataField: "popularity",
      sortBy: "desc",
      label: "Sort by Popularity(High to Low)\xA0 \xA0"
    }, {
      dataField: "vote_average",
      sortBy: "desc",
      label: "Sort by Ratings(High to Low) \xA0"
    }, {
      dataField: "original_title.raw",
      sortBy: "asc",
      label: "Sort by Title(A-Z) \xA0"
    }],
    onData: function onData(res) {
      return {
        description: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "main-description", __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "ih-item square effect6 top_to_bottom", __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { target: "#", href: "http://www.imdb.com/title/" + res.imdb_id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                { className: "img", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
                  src: "https://image.tmdb.org/t/p/w500" + res.poster_path,
                  alt: res.original_title,
                  className: "result-image",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                { className: "info colored", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "h3",
                  { className: "overlay-title", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    }
                  },
                  res.original_title
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  { className: "overlay-description", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94
                    }
                  },
                  res.tagline
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  { className: "overlay-info", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    { className: "rating-time-score-container", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "div",
                      { className: "sub-title Rating-data", __source: {
                          fileName: _jsxFileName,
                          lineNumber: 98
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "b",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 99
                          }
                        },
                        "Imdb",
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "span",
                          { className: "details", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 101
                            }
                          },
                          " ",
                          res.vote_average,
                          "/10 "
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "div",
                      { className: "time-data", __source: {
                          fileName: _jsxFileName,
                          lineNumber: 104
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "b",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 105
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "span",
                          { className: "time", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 106
                            }
                          },
                          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "fa fa-clock-o", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 107
                            }
                          }),
                          " "
                        ),
                        " ",
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "span",
                          { className: "details", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 109
                            }
                          },
                          res.time_str
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "div",
                      { className: "sub-title Score-data", __source: {
                          fileName: _jsxFileName,
                          lineNumber: 112
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "b",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 113
                          }
                        },
                        "Score:",
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "span",
                          { className: "details", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 115
                            }
                          },
                          " ",
                          res.score
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    { className: "revenue-lang-container", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 119
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "div",
                      { className: "revenue-data", __source: {
                          fileName: _jsxFileName,
                          lineNumber: 120
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "b",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 121
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "span",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 122
                            }
                          },
                          "Revenue:"
                        ),
                        " ",
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "span",
                          { className: "details", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 123
                            }
                          },
                          " $",
                          res.or_revenue
                        ),
                        " "
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "div",
                      { className: "sub-title language-data", __source: {
                          fileName: _jsxFileName,
                          lineNumber: 127
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "b",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 128
                          }
                        },
                        "Language:",
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "span",
                          { className: "details", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 130
                            }
                          },
                          " ",
                          res.original_language
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        url: "http://www.imdb.com/title/" + res.imdb_id
      };
    },
    innerClass: {
      title: "result-title",
      listItem: "result-item",
      list: "list-container",
      sortOptions: "sort-options",
      resultStats: "result-stats",
      resultsInfo: "result-list-info",
      poweredBy: "powered-by"
    }
  }
};

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {
      isClicked: false,
      message: "🔬Show Filters"
    };
    return _this;
  }

  _createClass(Main, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        isClicked: !this.state.isClicked,
        message: this.state.isClicked ? "🔬 Show Filters" : "🎬 Show Movies"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { className: "main-container", __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase___default.a,
          _extends({}, components.settings, { initialState: this.props.store, __source: {
              fileName: _jsxFileName,
              lineNumber: 198
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Navbar_js__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "sub-container", __source: {
                fileName: _jsxFileName,
                lineNumber: 201
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Leftbar_js__["a" /* default */], { isClicked: this.state.isClicked, __source: {
                fileName: _jsxFileName,
                lineNumber: 202
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                className: this.state.isClicked ? "result-container-optional" : "result-container",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 204
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_SelectedFilters___default.a, _extends({}, components.selectedFilters, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 211
                }
              })),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_result_ResultCard___default.a, _extends({}, components.resultCard, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 213
                }
              }))
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "button",
              {
                className: "toggle-button",
                onClick: this.handleClick.bind(this),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 216
                }
              },
              this.state.message
            )
          )
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_server___default()([_extends({}, components.selectedFilters, {
                  type: "SelectedFilters",
                  source: __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_SelectedFilters___default.a
                }), _extends({}, components.resultCard, {
                  type: "ResultCard",
                  source: __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_result_ResultCard___default.a
                })], null, components.settings);

              case 2:
                _context.t0 = _context.sent;
                return _context.abrupt("return", {
                  store: _context.t0
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Main;

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(components, "components", "/Users/jimmydang/Projects/MovieSearch/pages/index.js");
  reactHotLoader.register(Main, "Main", "/Users/jimmydang/Projects/MovieSearch/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/jimmydang/Projects/MovieSearch/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map