import React, { useEffect, useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useRef } from "react";

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [dateToggle, setDateToggle] = useState(false);
  const [optionToggle, setOptionToggle] = useState(false);
  const [option, setOption] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });
  const handleCounter = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const dateToggleRef = useRef(null);
  const optionToggleRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (!dateToggleRef?.current?.contains(event.target)) {
        // alert("You clicked outside of me!");
        setDateToggle(false);
      }
      if (!optionToggleRef?.current?.contains(event.target)) {
        // alert("You clicked outside of me!");
        setOptionToggle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle"> A lifetime of discounts? It's Genius</h1>
        <p className="headerDes">
          Get rewarded for your travels - unloack instant saving of 10% or more
          with a free <span className="underline">DeepHotels</span> account.
        </p>
        <button className="headerButton">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going ?"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItems" ref={dateToggleRef}>
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setDateToggle(!dateToggle)}
              className="searchText"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>

            {dateToggle && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>

          <div className="headerSearchItems" ref={optionToggleRef}>
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              className="searchText"
              onClick={() => setOptionToggle(!optionToggle)}
            >
              {`${option.adults}  ${option.adults === 1 ? "Adult" : "Adults"}`}{" "}
              &nbsp;&#8226;&nbsp;
              {` ${option.children}  ${
                option.children <= 1 ? "Child" : "Children"
              } `}
              &nbsp;&#8226;&nbsp;
              {` ${option.room}  ${option.room <= 1 ? "Room" : "Rooms"} `}
            </span>
            {optionToggle && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">
                    {option.adults <= 1 ? "Adult" : "Adults"}
                  </span>
                  <div className="optionCounter">
                    <button
                      className="dec"
                      onClick={() => {
                        if (option.adults > 1) {
                          handleCounter("adults", "d");
                        }
                      }}
                    >
                      -
                    </button>
                    <span className="counterText">{option.adults}</span>
                    <button
                      className="inc"
                      onClick={() => {
                        if (option.adults < 9) {
                          handleCounter("adults", "i");
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">
                    {" "}
                    {option.children <= 1 ? "Child" : "Children"}
                  </span>

                  <div className="optionCounter">
                    <button
                      className="dec"
                      onClick={() => {
                        if (option.children > 0) {
                          handleCounter("children", "d");
                        }
                      }}
                    >
                      -
                    </button>
                    <span className="counterText">{option.children}</span>
                    <button
                      className="inc"
                      onClick={() => {
                        if (option.children < 9) {
                          handleCounter("children", "i");
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">
                    {" "}
                    {option.room <= 1 ? "Room" : "Rooms"}
                  </span>
                  <div className="optionCounter">
                    <button
                      className="dec"
                      onClick={() => {
                        if (option.room > 1) {
                          handleCounter("room", "d");
                        }
                      }}
                    >
                      -
                    </button>
                    <span className="counterText">{option.room}</span>
                    <button
                      className="inc"
                      onClick={() => {
                        if (option.room < 9) {
                          handleCounter("room", "i");
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="headerSearchItems">
            <button className="headerButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
