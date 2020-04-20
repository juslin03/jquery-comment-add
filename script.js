var datas = JSON.parse(
  '{"_id":1, "titre": "Article 1", "contenu": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit culpa officiis repellendus, tempore quia obcaecati vero fuga animi qui! Voluptas hic provident non est ut. Itaque temporibus architecto laborum! Esse." }'
);

$(document).ready(function () {
  let answers = {};
  answers.id = 1;
  $(`#slug`).click(() => {
    let modal = $(".ui.modal").modal("show");
    if (modal) {
      $("#showArticleTitle, #articleSlug").html(
        "<center><p>" + datas.titre + "</p></center>"
      );
      $("#articleContenu").replaceWith(
        "<center><p style='width: 500px; text-align: center; color:grey; word-wrap:break-word;'>" +
          datas.contenu +
          datas._id +
          "</p></center>"
      );
      let t = $("#articleTitle").text();
      $("#showArticleTitle").replaceWith(t);

      $("#answerButton").click((e) => {
        e.preventDefault();
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();
        let day = d.getDate();
        let fullDate = `${day}-${month}-${year}`;
        answers.highScore = 100000;
        answers.titre = $("#titre").val();
        answers.categorie = $("#categorie").val();
        answers.contenu = $("#message").val();
        answers.date = fullDate;
        if (
          (answers.titre === undefined || answers.titre === "") &&
          !answers.categorie &&
          (!answers.contenu || answers.contenu === "")
        ) {
          return false;
        } else {
           localStorage.setItem("ansWer", JSON.stringify(answers));
          // console.log(answers);
          let discussion = $("#listDiscussion").append(
            "<div id='itemEl' class='item'>" +
              "<div class='right floated content'>" +
              `<button id=${answers.id} class='ui button'>Repondre</button>` +
              "</div>" +
              "<img class='ui avatar image' src='./images/logo-nan.png' />" +
              "<div class='content'>" +
              "<a href='' rel='noopener noreferrer'>" +
              answers.titre +
              "</a>" +
              "| <small style='color: grey;'>Posté le : "+fullDate+"</small>"+
              "<br><span class=iui commenti><small>Categorie: "+ answers.categorie +"</small></sm>"+
              "</div>" +
              "</div>"
          );
           $("#listDiscussion").concat(discussion);
          location.reload(true);
        }
        //save to json file
      });
    }
  });

    // let retriev = JSON.parse(localStorage.getItem("ansWer"));
    // $("#itemEl").append(
    //   "<div id='itemEl' class='item'>" +
    //     "<div class='right floated content'><button id=" +
    //     datas._id +
    //     " class='ui button'>Repondre</button></div>" +
    //     "<img class='ui avatar image' src='./images/logo-nan.png' />" +
    //     "<div class='content'><a href='' id='articleTitle' rel='noopener noreferrer'>" +
    //     retriev.contenu +
    //     "</a></div>" +
    //     "</div>"
    // );
});
