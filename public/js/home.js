/****************************************************
 * Carlos N Reina
 * cnreina@gmail.com
 ****************************************************/

 function errorAlert(errorsArrayParam){
    if (errorsArrayParam.length <= 0) {
        return
    };

    var errorString;
    if (typeof errorsArrayParam == 'array') {
        errorString = errorsArrayParam.join('\n');
    };

    if (typeof errorsArrayParam == 'string') {
        errorString = errorsArrayParam.replaceAll(',', '\n');
    }else {
        if (errorsArrayParam,isArray()) {
            errorString = errorsArrayParam.join('\n');
        };
    };
    
    if (errorString === '') {
        errorString = errorsArrayParam;
    };
    
    alert(errorString);
};
