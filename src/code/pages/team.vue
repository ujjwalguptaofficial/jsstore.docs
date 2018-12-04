<template>
  <div>
    <table class="margin-top-50px">
      <tbody>
        <tr v-for="person in teams" :key="person.name">
          <td><img class="team-img" :src="person.imageUrl" /></td>
          <td class="padding-left-20px">
            <h5>{{person.name}}</h5>
            <span>{{person.about}}</span>
            <a :href="person.link" class="margin-left-10px">Know More</a>
          </td>
        </tr>
      </tbody>
    </table>

    <p class="margin-top-50px">
      <b>Note:- </b> The teams are people who code for jsstore, you should have particular position in a team. So if you think we are missing you, add an issue at github mentioning your details.
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { ITeam } from "../interfaces";

@Component
export default class extends Vue {
  teams: ITeam[] = [
    {
      name: "Ujjwal Gupta",
      about: "Creator of jsstore, idbstudio.",
      link: "/about-ujjwal",
      imageUrl:
        "https://www.gravatar.com/avatar/ce4cbe03db6a0214f47217f05d0582c2?s=400&d=mm"
    }
  ];
}
</script>
<style scoped>
.team-img {
  width: 100px;
  height: 100px;
  border-radius: 15px;
}
</style>
<style>
#footer {
  bottom: 0px;
  position: absolute;
}
</style>

