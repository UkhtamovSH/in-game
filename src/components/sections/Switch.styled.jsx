import styled from "styled-components";

export const SwitchDiv = styled.div`
    .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #252525;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #333333;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #0EB800;
}

input:focus + .slider {
  box-shadow: 0 0 1px #0EB800;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  background-color: #fff;
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`