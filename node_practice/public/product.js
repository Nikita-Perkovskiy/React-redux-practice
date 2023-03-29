const API = "http://localhost:8000/api/";

const sendRequest = async (entity, method = "GET", config) => {
  return await fetch(`${API}${entity}`, {
    method,
    ...config,
  }).then((response) => {
    if (response.ok) {
      if (method === "GET" || method === "POST" || method === "PUT") {
        return response.json();
      }
      return response.json();
    }
  });
};

const getProducts = () => sendRequest("products");
const delProducts = (id) => sendRequest(`product/${id}`, "DELETE");
const root = document.querySelector("#products");

getProducts().then(({ data }) => {
  console.log(data);
  data.map((product) => {
    console.log("product", product);
    root.insertAdjacentHTML(
      "beforeend",
      `
                <div class="card-box">
                    <div class="col card" data-id="${product._id}">
                        <div class="card-header">
                            <div class="btn_del" style=" position: absolute; top: 0; right: 0; background: #000; color: #fff; padding: 5px;">}{</div> 
                            <img src="${product.src}" class="card-img-top" alt="${product.title}">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                       </div>
                    </div>
                </div>

        `
    );
  });
});
