const promise = anAsyncFunctionWhichReturnsAPromise();

promise.then(handleCompletedPromise);

function handleCompletedPromise(result) {
    //do stuff with the result
    console.log("result was: ", result);
}
