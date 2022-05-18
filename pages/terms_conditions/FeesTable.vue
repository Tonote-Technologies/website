<template>
  <table class="table table-auto lg:table-fixed w-[500px] text-right border lg:ml-10 lg:my-6">
    <tr class="bg-primary-color text-white font-bold">
      <th>Item</th>
      <th>Cost (₦)</th>
    </tr>
    <tr class="font-bold text-content-color">
      <td colspan="2" class="border">
        Minimum Viable Product (MVP) Plans
      </td>
    </tr>
    <tr class="text-content-color">
      <td class="border">
        Basic Plan
      </td>
      <td class="border">
        free
      </td>
    </tr>
    <tr class="text-content-color">
      <td class="border">
        ToNote Pro Plan
      </td>
      <td class="border">
        12,500
      </td>
    </tr>
    <tr class="text-content-color">
      <td class="border">
        ToNote Business Plan
      </td>
      <td class="border">
        custom
      </td>
    </tr>
    <tr class="font-bold text-content-color">
      <td colspan="2" class="border">
        Seals
      </td>
    </tr>
    <tr class="text-content-color">
      <td class="border">
        Single Seal
      </td>
      <td class="border">
        8,000
      </td>
    </tr>
    <tr class="text-content-color">
      <td class="border">
        Additional Seal
      </td>
      <td class="border">
        4,000
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'FeesTable'
}
</script>

<style scoped>
* {
  font-family: 'Karla', sans-serif;
}
</style>
