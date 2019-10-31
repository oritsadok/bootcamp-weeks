
// $(".remove").on("click", function(){
//   alert($(this).closest(".post").data().id)
// })
// when we click on the chosen element there will be alert with the id of the closest post


// $('button').on('click', function() {
//   let relevantInputValue = $(this).closest("div").find("input").val()
//   alert(relevantInputValue)
// })
//alert the val of the requied input at the nearst div


// $("button").on("click",function(){
//     let relevant = $(this).closest("div").find("span").text()
//     console.log(relevant)
// })
//printing the relevant text from the realeted span


// $("button").on("click", function(){
//     let find = $(".container").find("p").text()
//     console.log(find)
// })
//printing the realeted text of the nearest p using only div id



$(".generator").on("click", function () {
    let processor = $(this).closest(".processor").attr("id")
    //console.log(processor)
    let computerData = $(this).closest(".computer").data().id
    //console.log(computerData)
    let busNum = $(this).closest(".computer").find(".BUS").text()
    let dataArray = []
    dataArray.push({computerDataId:computerData,processorId:processor,BUS:busNum})
    console.log(dataArray)
})


$(".validator").on("click", function(){
    let generator = $(this).closest(".computer").find(".generator").text()
    console.log(generator)
    let mb = $(this).closest(".computer").find(".MB").text()
    console.log(mb)
    let qr1 =$(this).closest(".computer").find(".QR").text()
    console.log(qr1)
})








