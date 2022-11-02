<template>
  <div class="checkbox-form">
    <label :for="inputId" class="item">
      <span v-html="inputHtml"></span>
      <input
        :id="inputId"
        v-model="checked"
        type="checkbox"
        @change="onChange($event)"
      />
      <span class="checkmark">
        <span v-if="checkedSvg"
          ><svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8526 0H13.5678C13.3876 0 13.2167 0.0838704 13.1064 0.227382L5.52765 9.96195L1.8936 5.29316C1.83863 5.22239 1.76856 5.16516 1.68865 5.12578C1.60874 5.0864 1.52107 5.06589 1.43223 5.06578H0.14735C0.0241935 5.06578 -0.0438186 5.20929 0.0315461 5.3062L5.06627 11.7735C5.30156 12.0755 5.75375 12.0755 5.99087 11.7735L14.9685 0.238565C15.0438 0.143512 14.9758 0 14.8526 0V0Z"
              fill="black"
            />
          </svg>
        </span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    inputId: String,
    inputHtml: String,
  },
  data() {
    return {
      checked: [],
      checkedSvg: false,
    };
  },
  methods: {
    onChange(e) {
      this.$emit('input', this.checked);
      console.log(e.target.checked);
      this.checkedSvg = e.target.checked;
    },
  },
};
</script>

<style scoped>
.checkbox-form label {
  margin-left: 1em;
}

svg {
  vertical-align: top;
}

.checkbox-form .item {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 1em;
  height: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
}

.checkbox-form .item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-form .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #ccc;
}

.checkbox-form .item:hover input ~ .checkmark {
  background-color: #949494;
}

.checkbox-form .item input:checked ~ .checkmark {
  background-color: #d8a22e;
}

.checkbox-form .checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox-form .item input:checked ~ .checkmark:after {
  display: block;
}
</style>
