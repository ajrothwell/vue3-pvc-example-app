<template>
  <div id="app-root">
    <header class="site-header app group">
      <div class="row expanded">
        <div class="columns">
          <a href="//beta.phila.gov" class="logo">
            <img src="https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png" alt="City of Philadelphia">
          </a>
          <div class="app-divide"></div>
          <div class="page-title-container">
            <a href="#/">
              <h1 class="page-title">Vue 3 PVC Example App</h1>
            </a>
          </div>
        </div>
      </div>
    </header>

    <div id="components-root">

      <badge :slots="badgeSlots"/>

      <badge-custom :options="badgeCustomOptions"
                    :slots="badgeCustomSlots"
      />

      <font-awesome-icon icon="info-circle" class="fa-2x" />

      <div class="margin-sides-20">
        check out <external-link class="ib" :options="externalLinkOptions"/>
      </div>
      <div class="margin-sides-20">
        <!-- check out <external-link class="ib" :options="{ data: 'atlas.phila.gov', href: 'https://atlas.phila.gov' }"/> -->
        check out
        <external-link class="ib"
                       :options="{
                          data: 'openmaps.phila.gov',
                          href: 'https://openmaps.phila.gov'
                       }"
        />
      </div>

      <fieldset class="margin-20">
        <legend class="h4">Favorite Philly cheesesteaks</legend>
        <input id="pat" type="checkbox" name="cheesesteak" value="pat">
        <label for="pat">Pat's King of Steaks</label><br>
        <input id="geno" type="checkbox" name="cheesesteak" value="geno">
        <label for="geno">Geno's Steaks</label><br>
        <input id="tony-luke" type="checkbox" name="cheesesteak" value="tony-luke">
        <label for="tony-luke">Tony Luke's</label><br>
        <input id="jim" type="checkbox" name="cheesesteak" value="jim">
        <label for="jim">Jim's Steaks</label>
      </fieldset>

      <div class="margin-sides-20 component-label">callout:</div>
      <callout class="margin-20"
               :slots="callout_01_Slots"
      />

      <div class="margin-sides-20 component-label">popover-links:</div>
      <popover-link class="margin-20"
                    :slots="popoverLink_01_Slots"

      />
      <popover-link class="margin-20"
                    :slots="popoverLink_02_Slots"

      />

      <div class="margin-sides-20 component-label">vertical-tables:</div>
      <!-- <vertical-table class="margin-20 margin-bottom-60 medium-8"
                      :slots="verticalTable_01_Slots"
                      :options="verticalTable_01_Options"
      /> -->

      <vertical-table
        class="margin-20 margin-bottom-60 medium-8"
        :slots="{
          fields: [
            {
              label: 'field1',
              value: 'field1 value',
            },
            {
              label: 'field2',
              value: 'field2 value',
            },
          ]
        }"
        :options="{
          id: 'verticalTableId',
          externalLink: {
            action: function() {
              return 'external link - ';
            },
            // action: 'See more',
            name: 'Atlas',
            href: 'https://atlas.phila.gov'
          }
        }"
      />

      <div class="margin-sides-20 component-label">horizontal-table:</div>
      <!-- <horizontal-table class="margin-20 medium-10"
                      :slots="horizontalTable_01_Slots"
                      :options="horizontalTable_01_Options"
      /> -->
    </div>

    <popover :html="popover"
             v-if="popover && popover.length > 0"
    />

  </div>
</template>

<script>

  // import './../node_modules/foundation-sites/scss/foundation.scss'
  // import './../node_modules/foundation-sites/scss/_global.scss'
  // import './assets/scss/global.scss'
  // import '../node_modules/phila-standards/dist/css/phila-app.min.css';
  // import './styles.css';

  import axios from 'axios';

  import Callout from '@phila/vue-comps/src/components/Callout.vue';
  import PopoverLink from '@phila/vue-comps/src/components/PopoverLink.vue';
  import Popover from '@phila/vue-comps/src/components/Popover.vue';
  import VerticalTable from '@phila/vue-comps/src/components/VerticalTable.vue';
  // import HorizontalTable from '@phila/vue-comps/src/components/HorizontalTable.vue';
  import ExternalLink from '@phila/vue-comps/src/components/ExternalLink.vue';
  import Badge from '@phila/vue-comps/src/components/Badge.vue';
  import BadgeCustom from '@phila/vue-comps/src/components/BadgeCustom.vue';
  import Division from '@phila/vue-comps/src/components/Division.vue';
  import Paragraph from '@phila/vue-comps/src/components/Paragraph.vue';

  export default {
    components: {
      Callout,
      PopoverLink,
      Popover,
      VerticalTable,
      // HorizontalTable,
      ExternalLink,
      Badge,
      BadgeCustom,
      Division,
      Paragraph
    },
    data() {
      const data = {

        badgeSlots: {
          title: 'Base District',
          titleBackground: '#58c04d',
          value: 'RSA-5',
          description: 'residential street association 5'
        },

        badgeCustomOptions: {
          components: [
            {
              type: 'paragraph',
              slots: {
                text: 'test'
              }
            }
          ],
          titleBackground: '#58c04d'
        },
        badgeCustomSlots: {
          title: 'Base District',
          // value: 'RSA-5',
          // description: 'residential street association 5'
        },

        externalLinkOptions: {
          data: 'atlas.phila.gov',
          href: 'https://atlas.phila.gov'
        },

        callout_01_Slots: {
          text: 'text callout text',
        },


        popoverLink_01_Slots: {
          value: 'popover-link 1',
          shouldShowValue: true,
          popoverPreText: 'this is the popoverPreText for a popover with shouldShowValue: ',
          popoverPostText: ' - this is the popoverPostText',
        },
        popoverLink_02_Slots: {
          value: 'popover-link 2',
          shouldShowValue: false,
          popoverPreText: 'this is the popoverPreText for popover-link 2 (shouldShowValue is off) - ',
          popoverPostText: ' - this is the popoverPostText',
        },


        verticalTable_01_Slots: {
          fields: [
            {
              label: 'field1',
              value: 'field1 value',
            },
            {
              label: 'field2',
              value: 'field2 value',
            },
          ]
        },
        verticalTable_01_Options: {
          id: 'verticalTableId',
          externalLink: {
            action: function() {
              return 'external link - ';
            },
            // action: 'See more',
            name: 'Atlas',
            href: 'https://atlas.phila.gov'
          }
        },


        horizontalTable_01_Options: {
          id: 'testHorizTable_01',
          limit: 5,
          filters: [
            {
              type: 'time',
              getValue: function(item) {
                return item['violationdate'];
              },
              label: 'From the last',
              values: [
                {
                  label: '30 days',
                  value: '30',
                  unit: 'days',
                  direction: 'subtract',
                },
                {
                  label: '90 days',
                  value: '90',
                  unit: 'days',
                  direction: 'subtract',
                },
                {
                  label: 'year',
                  value: '1',
                  unit: 'years',
                  direction: 'subtract',
                },
                {
                  label: '10 years',
                  value: '10',
                  unit: 'years',
                  direction: 'subtract',
                }
              ]
            }
          ],
          fields: [
            {
              label: 'Violation Date',
              value: function(state, item){
                return item['violationdate'];
              },
              transforms: [
                'date'
              ]
            },
            {
              label: 'Case Number',
              value: function(state, item){
                return item['casenumber'];
              }
            },
            {
              label: 'Violation Type',
              value: function(state, item){
                return item['violationtype'];
              }
            },
            {
              label: 'Owner Name',
              value: function(state, item){
                return item['ownername'];
              }
            },
          ],
          externalLink: {
            action: function(count) {
              return 'See ' + count + ' older permits at L&I Property History';
            },
            name: 'L&I Property History',
            href: function(state) {
              return 'http://li.phila.gov/';
            }
          }
        },
        horizontalTable_01_Slots: {
          title: '1234 Market St. Violations',
          items: []
        },
      }
      return data;
    },
    mounted() {
      console.log('App.vue mounted is running, this.$config:', this.$config, 'this.$store:', this.$store, 'this.$controller:', this.$controller);
      const BusinessLicensesUrl = 'https://phl.carto.com/api/v2/sql?q=select+*+from+violations+where+address+%3D+%271234+MARKET+ST%27'
      axios.get(BusinessLicensesUrl).then(response => {
        console.log('axios success, response:', response);
        this.$data.horizontalTable_01_Slots.items = response.data.rows;
      }).catch(err => {
        console.error('Error loading base config:', err);
      });
    },
    computed: {
      popover() {
        return this.$store.state.popover;
      },
    },

  };

</script>

<style>


#app-root {
  height: 100%
}

#components-root {
  padding: 20px;
  height: 90%;
  overflow-y: auto;
}

.component-label {
  font-size: 20px;
}

.margin-sides-20 {
  margin-left: 20px;
  margin-right: 20px;
}

.margin-20 {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.margin-bottom-60 {
  margin-bottom: 60px !important;
}

.ib {
  display: inline-block;
}


</style>
