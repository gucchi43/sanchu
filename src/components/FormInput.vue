<template>
  <input
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    @input="updateValue"
  />
</template>

<script>
export default {
  name: "FormInput",
  props: {
    value: { type: String, require: true },
    type: { type: String, require: true },
    name: { type: String, require: true },
    placeholder: { type: String, require: false }
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
