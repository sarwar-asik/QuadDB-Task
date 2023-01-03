import React from "react";
import { toast } from "react-toastify";

const ModalDetails = ({ state }) => {
  //   console.log(show);
  const {name, type,language,summary, } = state?.show;

  const handleSumbmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    toast(` Booked ${name}`);
    const type = form.type.value;
    const language = form.language.value;
    const detail = form.details.value;

    const bookings = {
      name,
      type,
      language,
      detail,
    };
    const setBookings = JSON.stringify(bookings);

    
  const bookedItems = localStorage.getItem('movie');
  


    localStorage.setItem("movie", setBookings);

    console.log(setBookings);
  };
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {name}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSumbmit}>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Movie Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    defaultValue={name}
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    class="form-control"
                    defaultValue={type}
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Language Name
                  </label>
                  <input
                    type="text"
                    name="language"
                    class="form-control"
                    defaultValue={language}
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label"></label>
                  <textarea
                    name="details"
                    class="form-control"
                    defaultValue={summary}
                    id="message-text"
                  ></textarea>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value={"Book Movie"}
                    data-bs-dismiss="modal"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
