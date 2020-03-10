import React, { Component } from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

export class Profile extends Component {

    componentDidMount() {
        document.title = "Genesis Trust: Profile";

    }


    render() {
        return (
            <div>
                <link rel="stylesheet" href={require("./profile.css")} />
                <link rel="stylesheet" href={require("./main.css")} />

                <NavigationBar />
                <div class="main-container">

                    <div class="profile-container">
                        <div class="image-container">
                            <img class="profile-image" src="/Resources/Images/ProfilePicture.jpg"/>

            
        <span class="profile-image">Change Image</span>
    </div>

                            <div class="details-container">
                                <ul class="details-ul">
                                    <li class="details-label">Name</li>
                                    <li class="details-element">Clive Alive</li>
                                    <li class="details-label">Email</li>
                                    <li class="details-element">clive.alive@gmail.com</li>
                                    <li class="details-label">Current Roles</li>
                                    <li class="details-element">Gardener</li>
                                    <li class="details-element">Furniture Shop Assistant</li>
                                    <li class="details-label">Applications</li>
                                    <li class="details-element">Soup Runner</li>
                                </ul>
                            </div>
                        </div>

                        <div class="calendar-container">
                            <div class="month">
                                <ul>
                                    <li class="prev">&#10094;</li>
                                    <li class="next">&#10095;</li>
                                    <li>March<br/><span style="font-size:18px">2020</span></li>
        </ul>
      </div>

                                <ul class="weekdays">
                                    <li>Mo</li>
                                    <li>Tu</li>
                                    <li>We</li>
                                    <li>Th</li>
                                    <li>Fr</li>
                                    <li>Sa</li>
                                    <li>Su</li>
                                </ul>

                                <ul class="days">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                    <li>8</li>
                                    <li>9</li>
                                    <li><span class="active">10</span></li>
                                    <li>11</li>
                                    <li>12</li>
                                    <li>13</li>
                                    <li>14</li>
                                    <li>15</li>
                                    <li>16</li>
                                    <li>17</li>
                                    <li>18</li>
                                    <li>19</li>
                                    <li>20</li>
                                    <li>21</li>
                                    <li>22</li>
                                    <li>23</li>
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li>28</li>
                                    <li>29</li>
                                    <li>30</li>
                                    <li>31</li>
                                </ul>

                            </div>


                        </div>



                        <Footer />
                    </div>
                    )
                }
}