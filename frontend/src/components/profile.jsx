import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Nav from "./nav";

export default function Profile() {
  return (
    <>
      <div className="container">
        <br /> <br /> <br />
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header text-center">
                  <h3>Profile Information</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 text-center">
                      <img
                        src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/441606007_7740397599374027_6708525384081313800_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEL_I9g9fzPxavktKBE4AuRdB8OKR-JTwh0Hw4pH4lPCKoAKh7JB8dsFEWT91XDXtz03G6tR8nKdpsppk5Pz0mH&_nc_ohc=6TCSBqLdtagQ7kNvwEJx9DU&_nc_oc=AdngWS9creY3EPwg9b5NRHFHATZfs4lzzTdWpGzGVAne-39BcUB21F7oIjKHb-mNGSOdgZdyZs6s9OLzmXKrTQJN&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=XeN1CHvDcdY1qcktGmvcgg&oh=00_AfF_G_zxMyhcOFliI26b-f9hKrzw5GpoIuMZft6JeckvEw&oe=67F882A0"
                        alt="Profile"
                        className="rounded-circle"
                        width="150"
                        height="150"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <h5>Personal Information</h5>
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Name:</th>
                            <td>Kenneth Omiping</td>
                          </tr>
                          <tr>
                            <th>Email:</th>
                            <td>omiping.kenneth@marsu.edu.ph</td>
                          </tr>
                          <tr>
                            <th>Phone:</th>
                            <td>+63 9757736873</td>
                          </tr>
                          <tr>
                            <th>Location:</th>
                            <td>Cawit, Boac, Marinduque</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <h5>About</h5>
                      <p>
                        Hello! I'm John, a web developer with a passion for
                        creating beautiful and functional user interfaces. I
                        have experience in both front-end and back-end
                        development, and I love learning new technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
      </div>
      <Footer />
    </>
  );
}
